from django.urls import path
from . import views


#User routes main app
urlpatterns = [
    path('', views.inicio, name ='inicio'),
    path ('login/', views.log_in, name = 'login'),
    path ('dashboard/', views.dashboard, name ='dashboard'),
    path ('generador/', views.recipes, name = "generador"),
    path ('resultados/', views.results, name = "resultados"),
    path ('logout/', views.endSesion, name ='logout'),
] 
