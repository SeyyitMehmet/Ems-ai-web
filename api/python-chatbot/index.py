import os
import json
import traceback
from fastapi import FastAPI, Response, status
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
from typing import Optional
import redis # Langchain yerine doğrudan redis kütüphanesini kullanıyoruz

# --- 1. YAPILANDIRMA ---
load_dotenv(dotenv_path=".env.local")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
REDIS_URL = os.getenv("REDIS_URL")

if not GOOGLE_API_KEY or not REDIS_URL:
    raise ValueError("Lütfen ortam değişkenlerinde GOOGLE_API_KEY ve REDIS_URL'yi tanımlayın.")

genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash-latest")
# Redis'e doğrudan bağlanıyoruz
redis_client = redis.from_url(REDIS_URL, decode_responses=True)

# --- 2. YENİ, LANGCHAIN'SİZ SINIFLAR VE FONKSİYONLAR ---
class UserState:
    """Kullanıcının mevcut durumunu (hangi konuda kaldığı gibi) yönetir."""
    def __init__(self, session_id: str):
        self.session_key = f"state:{session_id}"
    def get_state(self) -> dict:
        state_json = redis_client.get(self.session_key)
        if not state_json:
            return {"current_topic": None, "badges": []}
        try:
            state_data = json.loads(state_json)
            state_data.setdefault("current_topic", None)
            state_data.setdefault("badges", [])
            return state_data
        except (json.JSONDecodeError, TypeError):
            return {"current_topic": None, "badges": []}
    def save_state(self, state: dict):
        redis_client.set(self.session_key, json.dumps(state))

class PointSystem:
    """Kullanıcının puanlarını yönetir."""
    def __init__(self, session_id: str):
        self.session_key = f"points:{session_id}"
        self.points = 0
        try:
            points_val = redis_client.get(self.session_key)
            if points_val:
                self.points = int(points_val)
        except (ValueError, TypeError):
            self.points = 0
    def add_points(self, amount: int):
        self.points += amount
        redis_client.set(self.session_key, str(self.points))

def get_chat_history(session_id: str, limit: int = 6) -> str:
    """Redis'ten konuşma geçmişini çeker."""
    history_key = f"chat:{session_id}"
    messages = redis_client.lrange(history_key, 0, limit - 1)
    history_text = ""
    # Redis'e en son mesaj en başa eklendiği için (lpush), sondan başa doğru okumalıyız
    for msg_json in reversed(messages):
        msg = json.loads(msg_json)
        role = "Öğrenci" if msg.get("role") == "user" else "Öğretmen"
        history_text += f"{role}: {msg.get('content')}\n"
    return history_text

def add_to_chat_history(session_id: str, user_message: str, ai_message: str):
    """Yeni mesajları Redis'teki konuşma geçmişine ekler."""
    history_key = f"chat:{session_id}"
    redis_client.lpush(history_key, json.dumps({"role": "ai", "content": ai_message}))
    redis_client.lpush(history_key, json.dumps({"role": "user", "content": user_message}))
    # Hafızada en son 50 mesajı tut (gereksiz büyümesini engelle)
    redis_client.ltrim(history_key, 0, 49)

# --- 3. FastAPI UYGULAMASI ---
app = FastAPI()
class ChatRequest(BaseModel):
    message: str; session_id: str; user_name: str; grade: Optional[int] = None; subject: Optional[str] = None; knowledge_text: Optional[str] = None

@app.post("/api/python-chatbot")
async def chat_handler(request: ChatRequest, response: Response):
    try:
        user_input = request.message
        session_id = request.session_id
        user_name = request.user_name
        grade = request.grade
        subject = request.subject
        knowledge_text = request.knowledge_text

        # Yeni, hafif fonksiyon ve sınıflarımızı kullanıyoruz
        state_manager = UserState(session_id)
        state = state_manager.get_state()
        history_text = get_chat_history(session_id)
        points_manager = PointSystem(session_id) # Puan sistemi de artık LangChain'siz

        context_intro = f"Sen, EMS-AI adında, {grade}. sınıf öğrencisi {user_name} ile konuşan sevimli, sabırlı ve çok akıllı bir öğretmensin. Ona '{subject}' dersinde yardımcı oluyorsun."

        # Akıllı sistem talimatı (değişiklik yok)
        system_prompt = f"""
        {context_intro}

        Aşağıda öğrenciyle aranızdaki son konuşmalar var:
        ---
        {history_text}
        ---
        Öğrencinin en son söylediği şey şu: "{user_input}"

        Şimdi, bu bilgileri kullanarak öğrenciye en yardımcı olacak cevabı oluştur. Görevin:
        1. **Yeni Konu Talebi:** Eğer öğrenci yeni bir konu istiyorsa VE sana bu konuyla ilgili bir "KAYNAK METİN" verildiyse, o metni kullanarak konuyu basitçe anlat. (KAYNAK METİN: "{knowledge_text if knowledge_text else 'Yok'}")
        2. **Takip Sorusu (Detaylandırma):** Eğer öğrenci, senin daha önce anlattığın bir şey hakkında soru soruyor veya bir yeri anlamadığını söylüyorsa, konuyu daha da basitleştirerek ve yeni örnekler vererek o kısmı açıkla.
        3. **Pratik Talebi (Örnek/Soru):** Eğer öğrenci pratik yapmak, bir örnek görmek veya bir soru çözmek istiyorsa, konuyla ilgili {grade}. sınıf seviyesine uygun, basit ve eğlenceli bir soru veya alıştırma oluştur.
        4. **Komutları Anlama:** Eğer öğrenci sana "hepsini anlat", "özetle", "önem sırasına göre anlat" gibi bir komut verirse, bu komutu harfiyen yerine getirerek mevcut konuyu istenen şekilde yeniden anlat.
        5. **Sohbet:** Eğer öğrenci sadece sohbet ediyorsa, ona sıcak ve arkadaşça bir cevap ver.

        Her zaman neşeli, destekleyici ve basit bir dil kullan. Cevabının sonunda öğrencinin konuyu anlayıp anlamadığını kontrol eden bir soru sor.
        """

        gen_response = await model.generate_content_async(system_prompt)
        bot_reply_to_user = gen_response.text.strip()
        
        # Yeni mesajları geçmişe ekle
        add_to_chat_history(session_id, user_input, bot_reply_to_user)
        
        # Yeni bir konu anlatıldıysa, durumu kaydet
        if knowledge_text:
            state["current_topic"] = user_input
        state_manager.save_state(state)

        return {"reply": bot_reply_to_user, "points": points_manager.points, "new_badge_won": None}

    except Exception as e:
        print(f"!!! HATA: {e}"); traceback.print_exc()
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {"error": "Sunucuda bir hata oluştu.", "details": str(e)}