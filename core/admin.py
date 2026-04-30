from django.contrib import admin
from .models import StudyNote

@admin.register(StudyNote)
class StudyNoteAdmin(admin.ModelAdmin):
    list_display = ('topic', 'created_at') # Mostra o título e a data na lista
    search_fields = ('topic',)              # Cria uma barra de busca