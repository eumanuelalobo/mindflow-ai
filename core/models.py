from django.db import models

class StudyNote(models.Model):
    topic = models.CharField(max_length=200) # O que o aluno quis aprender
    explanation = models.TextField()           # A resposta da IA
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.topic} - {self.created_at.strftime('%d/%m/%Y')}"