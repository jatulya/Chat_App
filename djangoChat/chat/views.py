'''views.py is responsible for handling the logic of the application 
and returning a response'''
from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')
