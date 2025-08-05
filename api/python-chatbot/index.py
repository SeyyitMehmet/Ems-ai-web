import os
import json
import traceback
from fastapi import FastAPI, Response, status
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
from typing import Optional, List, Dict
import redis
from googleapiclient.discovery import build
from youtube_transcript_api import YouTubeTranscriptApi, NoTranscriptFound, TranscriptsDisabled

# --- 1. YAPILANDIRMA ---
load_dotenv(dotenv_path=".env.local")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
REDIS_URL = os.getenv("REDIS_URL")
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

if not all([GOOGLE_API_KEY, REDIS_URL, YOUTUBE_API_KEY]):
    raise ValueError("Lütfen ortam değişkenlerinde GOOGLE_API_KEY, REDIS_URL ve YOUTUBE_API_KEY'yi tanımlayın.")

genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash-latest")
redis_client = redis.from_url(REDIS_URL, decode_responses=True)
youtube_service = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

# --- 2. YARDIMCI FONKSİYONLAR VE SINIFLAR ---

def simplify_summary_for_kids(text: str, max_length: int = 150) -> str:
    text = text.replace("\n", " ").strip()
    if len(text) > max_length:
        text = text[:max_length] + "..."
    return f"Bu videoda şunları öğreneceksin: {text}"

def get_transcript_summary(video_id: str) -> Optional[str]:
    try:
        transcript_list = YouTubeTranscriptApi.get_transcript(video_id, languages=['tr', 'en'])
        full_text = " ".join([entry['text'] for entry in transcript_list])
        return simplify_summary_for_kids(full_text)
    except (NoTranscriptFound, TranscriptsDisabled):
        return None
    except Exception:
        return None

def search_youtube_video(query: str) -> Optional[Dict]:
    try:
        search_query = f"{query} konu anlatımı ilkokul"
        search_response = youtube_service.search().list(
            q=search_query,
            type='video',
            part='id,snippet',
            maxResults=1,
            relevanceLanguage='tr',
            videoEmbeddable='true'
        ).execute()

        if not search_response.get('items', []):
            return None

        item = search_response['items'][0]
        video_id = item['id']['videoId']
        
        summary = get_transcript_summary(video_id)
        if not summary:
            description = item['snippet'].get('description', '')
            summary = simplify_summary_for_kids(description) if description else "Bu video için özet bulunamadı."

        video_data = {
            "title": item['snippet']['title'],
            "url": f"https://www.youtube.com/watch?v={video_id}",
            "thumbnail": item['snippet']['thumbnails']['high']['url'],
            "summary": summary
        }
        return video_data
    except Exception as e:
        print(f"!!! YouTube API Arama Hatası: {e}")
        return None

class UserState:
    def __init__(self, session_id: str):
        self.session_key = f"state:{session_id}"
    def get_state(self) -> dict:
        state_json = redis_client.get(self.session_key)
        if not state_json: return {"current_topic": None, "badges": []}
        try:
            state_data = json.loads(state_json)
            state_data.setdefault("current_topic", None); state_data.setdefault("badges", [])
            return state_data
        except (json.JSONDecodeError, TypeError): return {"current_topic": None, "badges": []}
    def save_state(self, state: dict):
        redis_client.set(self.session_key, json.dumps(state))

class PointSystem:
    def __init__(self, session_id: str):
        self.session_key = f"points:{session_id}"
        self.points = 0
        try:
            points_val = redis_client.get(self.session_key)
            if points_val: self.points = int(points_val)
        except (ValueError, TypeError): self.points = 0
    def add_points(self, amount: int):
        self.points += amount; redis_client.set(self.session_key, str(self.points))

def get_chat_history(session_id: str, limit: int = 6) -> str:
    history_key = f"chat:{session_id}"; messages = redis_client.lrange(history_key, 0, limit - 1)
    history_text = ""
    for msg_json in reversed(messages):
        msg = json.loads(msg_json)
        role = "Öğrenci" if msg.get("role") == "user" else "Öğretmen"
        history_text += f"{role}: {msg.get('content')}\n"
    return history_text

def add_to_chat_history(session_id: str, user_message: str, ai_message: str):
    history_key = f"chat:{session_id}"
    redis_client.lpush(history_key, json.dumps({"role": "ai", "content": ai_message}))
    redis_client.lpush(history_key, json.dumps({"role": "user", "content": user_message}))
    redis_client.ltrim(history_key, 0, 49)

# --- 3. FastAPI UYGULAMASI ---
app = FastAPI()
class ChatRequest(BaseModel):
    message: str; session_id: str; user_name: str; grade: Optional[int] = None; subject: Optional[str] = None; knowledge_text: Optional[str] = None

@app.post("/api/python-chatbot")
async def chat_handler(request: ChatRequest, response: Response):
    try:
        user_input = request.message; session_id = request.session_id; user_name = request.user_name; grade = request.grade; subject = request.subject; knowledge_text = request.knowledge_text
        
        state_manager = UserState(session_id)
        state = state_manager.get_state()
        history_text = get_chat_history(session_id)
        points_manager = PointSystem(session_id)
        
        current_topic_from_state = state.get("current_topic")
        is_new_topic_request = (current_topic_from_state is None) or (user_input.lower() != str(current_topic_from_state).lower())

        context_intro = f"Sen, EMS-AI adında, {grade}. sınıf öğrencisi {user_name} ile konuşan sevimli, sabırlı ve çok akıllı bir öğretmensin. Ona '{subject}' dersinde yardımcı oluyorsun."
        
        youtube_suggestion = None
        if is_new_topic_request:
            youtube_suggestion = search_youtube_video(f"{grade}. Sınıf {subject} {user_input}")

        system_prompt = f"""
        {context_intro}
        Aşağıda öğrenciyle aranızdaki son konuşmalar var:
        ---
        {history_text}
        ---
        Öğrencinin en son söylediği şey şu: "{user_input}"
        Şimdi, bu bilgileri kullanarak öğrenciye en yardımcı olacak cevabı oluştur. Görevin:
        - **EĞER YENİ BİR KONU ANLATIMI İSTENİYORSA:**
            - **ÖNCELİK 1:** Eğer sana bir video bilgisi verildiyse, cevabına MUTLAKA şu cümleyle başla: "Harika bir konu seçtin! Bu konuyla ilgili çok güzel bir video buldum, önce onu izleyebilirsin:" ve metni burada bitir. Videonun linkini veya başlığını metne ekleme.
            - **ÖNCELİK 2:** Video bilgisi yoksa AMA sana bir "KAYNAK METİN" verildiyse, o metni kullanarak konuyu basitçe anlat. (KAYNAK METİN: "{knowledge_text if knowledge_text else 'Yok'}")
            - **ÖNCELİK 3:** Eğer ne video ne de KAYNAK METİN yoksa, konuyu kendi bilgilerinle {grade}. sınıf seviyesine uygun olarak anlat.
        - **EĞER TAKİP SORUSU VEYA PRATİK İSTEĞİ VARSA:**
            - **Takip Sorusu:** Öğrenci anlattığın bir şeyi anlamadıysa, konuyu daha da basitleştirerek ve yeni örnekler vererek o kısmı açıkla.
            - **Pratik Talebi:** Konuyla ilgili basit ve eğlenceli bir soru veya alıştırma oluştur.
            - **Komutları Anlama:** "Hepsini anlat", "özetle" gibi komutları yerine getir.
        Her zaman neşeli, destekleyici ve basit bir dil kullan. Cevabının sonunda öğrencinin konuyu anlayıp anlamadığını kontrol eden bir soru sor.
        """
        
        gen_response = model.generate_content(system_prompt)
        bot_reply_to_user = gen_response.text.strip()
        
        add_to_chat_history(session_id, user_input, bot_reply_to_user)
        
        if is_new_topic_request:
            state["current_topic"] = user_input
        state_manager.save_state(state)
        
        return {"reply": bot_reply_to_user, "points": points_manager.points, "new_badge_won": None, "youtube_suggestion": youtube_suggestion}

    except Exception as e:
        print(f"!!! HATA: {e}"); traceback.print_exc()
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        return {"error": "Sunucuda bir hata oluştu.", "details": str(e)}