from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=100, null = False)
    image = models.CharField(max_length=200, null = False)
    description = models.CharField(max_length=200, null = False)

