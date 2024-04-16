from django.urls import path
from . import views

'''urlpatterns gives a list of urls
when a user wants to go to 'home', django checks the views.py and executes the function named "home" '''
urlpatterns = [
    path('', views.home, name="home"), # when you type base url it will execute home() in views.py
]