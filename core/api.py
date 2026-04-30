import google.generativeai as genai
from ninja import NinjaAPI, Schema
from .models import StudyNote # 1. ADICIONE ESSA LINHA PARA IMPORTAR O MODELO
from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_extra import NinjaExtraAPI
from ninja_jwt.authentication import JWTAuth
from ninja import Router # Certifique-se de importar o Router
api = NinjaExtraAPI()
# 1. Configuramos o roteador de autenticação corretamente
auth_router = Router()
api.register_controllers(NinjaJWTDefaultController)
model = genai.GenerativeModel('models/gemini-2.5-flash')
genai.configure(api_key="AIzaSyDki-ChjBZYuiOKnsyA-hrzxm_Y-nksGww")

class StudyRequest(Schema):
    topic: str

@api.post("/mentor/explain")
def explain_topic(request, data: StudyRequest):
    try:
        response = model.generate_content(f"Explique {data.topic} para um estudante de ADS.")
        
        # 2. ESTA É A LINHA DO PASSO 2 (Salvando no Banco):
        note = StudyNote.objects.create(
            topic=data.topic,
            content=response.text
        )
        
        # 3. Retornamos os dados que agora estão salvos
        return {
            "id": note.id,
            "topic": note.topic,
            "explanation": note.content
        }
    except Exception as e:
        if "429" in str(e):
            return {"error": "Calma! Estou processando muitas informações. Tente novamente em alguns segundos."}
        return {"error": str(e)}
from typing import List

# Criamos um "Schema" para dizer como os dados devem sair para o usuário
class HistorySchema(Schema):
    id: int
    topic: str
    content: str
    created_at: str # Se você tiver esse campo no models.py

@api.get("/history", response=List[HistorySchema])
def get_history(request):
    # O Django busca todos os registros e o Ninja converte para JSON
    return StudyNote.objects.all().order_by('-id')    
