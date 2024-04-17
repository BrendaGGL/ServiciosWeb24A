from django.urls import path
from .views import RecipeViewSet, HomeView, LogoutView
from django.contrib import admin
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [

    path('home/', HomeView.as_view(), name ='home'),
    path('logout/', LogoutView.as_view(), name ='logout'),

    path('recipes', RecipeViewSet.as_view({
        'get':'list',
        'post': 'create'
    })),
    path('recipes/<str:pk>', RecipeViewSet.as_view({
        'get':'retrieve',
        'put': 'update',
        'delete': 'destroy'
    })),

#    path('users', UserViewSet.as_view({
#       'get':'list',
#        'post': 'create'
#    })),
#    path('users/<str:pk>', UserViewSet.as_view({
#        'get':'retrieve',
#        'put': 'update',
#        'delete': 'destroy'
#    })),
    
    path('token/', 
        jwt_views.TokenObtainPairView.as_view(), 
        name ='token_obtain_pair'),
    path('token/refresh/', 
        jwt_views.TokenRefreshView.as_view(), 
        name ='token_refresh')
    
]


