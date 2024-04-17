from rest_framework import serializers
from .models import Recipe
from django.contrib.auth.hashers import make_password

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


#class UserSerializer(serializers.ModelSerializer):

#    class Meta:
#        model = User
#        fields = ('username', 'email', 'password')
    
#    def create(self, validated_data):
#        validated_data['password'] = make_password(validated_data['password'])
#        return super().create(validated_data)



