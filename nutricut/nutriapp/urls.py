from django.urls import path
from . import views


#User routes main app
urlpatterns = [
    path('', views.inicio, name ='inicio'),
    path ('login/', views.log_in, name = 'login'),
    path ('dashboard', views.dashboard, name ='dashboard'),
    path ('logout/', views.endSesion, name ='logout'),
] 
