from django.contrib import admin
from django.urls import path
import core.api as api_module
api = api_module.api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),  # Isso aqui cria o /api/docs automaticamente
]