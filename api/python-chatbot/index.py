import os
import json
import traceback
from fastapi import FastAPI, Response, status
from pydantic import BaseModel
import google.generativeai as genai
# DÜZELTME: Import ifadesi daha hafif olan yeni kütüphaneden yapılıyor
from langchain_redis import RedisChatMessageHistory
from dotenv import load_dotenv
from typing import Optional

# .env dosyasını yükle
load_dotenv(dotenv_path=".env.local")

# --- 1. YAPILANDIRMA ---
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
REDIS_URL = os.getenv("REDIS_URL")

if not GOOGLE_API_KEY or not REDIS_URL:
    raise ValueError("Lütfen ortam değişkenlerinde GOOGLE_API_KEY ve REDIS_URL'yi tanımlayın.")

genai.configure(api_key=GOOGLE_API_KEY) 
model = genai.GenerativeModel("gemini-1.5-flash-latest")

# --- 2. SINIFLAR VE DURUM YÖNETİMİ ---
BADGES = [
    {"name": "Meraklı Kaşif 🗺️", "points": 50},
    {"name": "Bilgi Avcısı 🦉", "points": 100},
    {"name": "Süper Öğrenci 🌟", "points": 200}
]
class UserState:
    def __init__(self, session_id: str):
        self.session_id = session_id
        self.history = RedisChatMessageHistory(session_id=f"state_{self.session_id}", url=REDIS_URL)
    def get_state(self) -> dict:
        if not self.history.messages:
            return {"last_action": None, "current_topic": None, "badges": []}
        try:
            state_data = json.loads(self.history.messages[0].content)
            state_data.setdefault("current_topic", None)
            state_data.setdefault("badges", [])
            return state_data
        except:
            return {"last_action": None, "current_topic": None, "badges": []}
    def save_state(self, state: dict):
        self.history.clear()
        self.history.add_user_message(json.dumps(state))

class PointSystem:
    def __init__(self, session_id: str):
        self.session_id = session_id
        self.history = RedisChatMessageHistory(session_id=f"points_{self.session_id}", url=REDIS_URL)
        self.points = 0
        if self.history.messages:
            try:
                self.points = int(self.history.messages[0].content)
            except:
                self.points = 0
    def add_points(self, amount: int):
        self.points += amount
        self.history.clear()
        self.history.add_user_message(str(self.points))

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
        
        points_manager = PointSystem(session_id)
        state_manager = UserState(session_id)
        state = state_manager.get_state()
        chat_history = RedisChatMessageHistory(session_id=f"chat_{session_id}", url=REDIS_URL)
        
        history_text = ""
        for msg in chat_history.messages[-6:]:
            role = "Öğrenci" if msg.type == "human" else "Öğretmen"
            history_text += f"{role}: {msg.content}\n"

        context_intro = f"Sen, EMS-AI adında, {grade}. sınıf öğrencisi {user_name} ile konuşan sevimli, sabırlı ve çok akıllı bir öğretmensin. Ona '{subject}' dersinde yardımcı oluyorsun."

        system_prompt = f"""
        {context_intro}
        Aşağıda öğrenciyle aranızdaki son konuşmalar var:
        ---
        {history_text}
        ---
        Öğrencinin en son söylediği şey şu: "{user_input}"
        Şimdi, bu bilgileri kullanarak öğrenciye en yardımcı olacak cevabı oluştur. Görevin:
        1. **Yeni Konu Talebi:** Eğer öğrenci yeni bir konu istiyorsa VE sana bu konuyla ilgili bir "KAYNAK METİN" verildiyse, o metni kullanarak konuyu basitçe anlat. (KAYNAK METİN: "{knowledge_text if knowledge_text else 'Yok'}")
        2. **Takip Sorusu (Detaylandırma):** Eğer öğrenci, senin daha önce anlattığın bir şey hakkında soru soruyor veya bir yeri anlamadığını söylüyorsa, konuyu daha da basitleştirerek ve yeni örnekler vererek o kısmı açıkla. Kendi bilgini ve yaratıcılığını kullan.
        3. **Pratik Talebi (Örnek/Soru):** Eğer öğrenci pratik yapmak, bir örnek görmek veya bir soru çözmek istiyorsa, konuyla ilgili {grade}. sınıf seviyesine uygun, basit ve eğlenceli bir soru veya alıştırma oluştur.
        4. **Komutları Anlama:** Eğer öğrenci sana "hepsini anlat", "özetle", "önem sırasına göre anlat" gibi bir komut verirse, bu komutu harfiyen yerine getirerek mevcut konuyu istenen şekilde yeniden anlat.
        5. **Sohbet:** Eğer öğrenci sadece sohbet ediyorsa, ona sıcak ve arkadaşça bir cevap ver.
        Her zaman neşeli, destekleyici ve basit bir dil kullan. Cevabının sonunda öğrencinin konuyu anlayıp anlamadığını kontrol eden bir soru sor.
        """
        
        gen_response = await model.generate_content_async(system_prompt)
        bot_reply_to_user = gen_response.text.strip()
        
        chat_history.add_user_message(user_input)
        chat_history.add_ai_message(bot_reply_to_user)
        
        if knowledge_text:
            state["current_topic"] = user_input
        
        state_manager.save_state(state)
        return {"reply": bot_reply_to_user, "points": points_manager.points, "new_badge_won": None}
    except Exception as e:
        print(f"!!! HATA: {e}"); traceback.print_exc()
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {"error": "Sunucuda bir hata oluştu.", "details": str(e)}