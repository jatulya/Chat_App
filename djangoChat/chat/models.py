'''models are used to define the structure of the data that will be stored in the database. 
Each model represents a single database table,'''
from django.db import models
from datetime import datetime
# Create your models here.

class Room(models.Model): #this is our main class for room information
    name = models.CharField(max_length=1000)

class Message(models.Model):
    value = models.CharField(max_length=100000)
    date = models.DateTimeField(default=datetime.now(), blank=True)
    user = models.CharField(max_length=1000)
    room = models.CharField(max_length=1000)