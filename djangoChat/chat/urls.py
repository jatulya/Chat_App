from django.urls import path
from . import views

'''urlpatterns gives a list of urls
path() -> defines a url pattern
<> -> the value is passed to the associated view. it is in the url route
views.checkview -> when /checkview comes, django calls function checkview from views.py
name=checkview -> this url pattern is named checkview so that this url can be called from other parts of django files just with the name, not the whole url '''
urlpatterns = [
    path('', views.home, name="home"), # when you type base url it will execute home() in views.py
    path('<str:room>/', views.room, name='room'),   # <str:room> is a dynamic url where string variable is room
    path('checkview', views.checkview, name='checkview'),
    path('send', views.send, name="send"),
]