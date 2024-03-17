from django import forms
from django.contrib.auth.models import User

#User signup form
class Usersignup(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
class LoginForm(forms.Form):
    username = forms.CharField(max_length=65)
    password = forms.CharField(max_length=65)


