from rest_framework import viewsets, status
import jwt
from rest_framework.response import Response
from .producer import publish
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password


# Create your views here.

##class UserViewSet(viewsets.ViewSet):
    #Return a list of objects (Users)
#    def list(self,request):
#        users = User.objects.all()
#        serializer = UserSerializer(users, many = True)
#        return Response(serializer.data)


    #api/user
    #Create an element into the db
#    def create(self,request):
#        serializer = UserSerializer(data = request.data)
#        serializer.is_valid(raise_exception=True)
#        serializer.create(serializer)
#        serializer.save()
#        publish('User_Created', serializer.data)
#        return Response(serializer.data, status = status.HTTP_201_CREATED )
        
    #api/user/id
    #Search and return an element by it's ID
#    def retrieve(self,request, pk = None):
#        user = User.objects.get(id=pk)
#        serializer = UserSerializer(user)
#        return Response(serializer.data)


#    def update(self,request, pk = None):
#        user = User.objects.get(id=pk)
#        serializer = UserSerializer(instance=user, data=request.data)
#        serializer.is_valid(raise_exception=True)
#       serializer.save()
#        publish('User_Updated', serializer.data)
#        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

#    def destroy(self,request, pk = None):
#        user = User.objects.get(id=pk)
#        user.delete()
#        publish('User_Deleted', pk)
#        return Response(status=status.HTTP_204_NO_CONTENT)

class RecipeViewSet(viewsets.ViewSet):
    #api/user
    #Return a list of objects (Recipes)
    def list(self,request):
        recipes = Recipe.objects.all()
        serializer = RecipeSerializer(recipes, many = True)
        return Response(serializer.data)


    #api/user
    #Create an element into the db
    def create(self,request):
        serializer = RecipeSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        publish('Recipe_Created', serializer.data)
        return Response(serializer.data, status = status.HTTP_201_CREATED )
        
    #api/user/id
    #Search and return an element by it's ID
    def retrieve(self,request, pk = None):
        recipe = Recipe.objects.get(id=pk)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)


    def update(self,request, pk = None):
        recipe = Recipe.objects.get(id=pk)
        serializer = RecipeSerializer(instance=recipe, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        publish('Recipe_Updated', serializer.data)
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def destroy(self,request, pk = None):
        recipe = Recipe.objects.get(id=pk)
        recipe.delete()
        publish('Recipe_Deleted', pk)
        return Response(status=status.HTTP_204_NO_CONTENT)

class HomeView(APIView):
    permission_classes = (IsAuthenticated, )
    def get(self, request):
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}
        return Response(content)
    
class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):

        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)