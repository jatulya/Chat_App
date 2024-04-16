Commands to be followed

1. pip install django (not everytime)
2. python-admin startproject djangoChat -> creates a django project
3. change the directory
4. python manage.py startapp chat -> inside the django project
5. in the djangoChat, there would be two folders -> chat and djangoChat and manage.py
create a folder to add template files. 
6. in settings.py in djangoChat subdir, 
  a. add 'chat' in the list "INSTALLED APPS"
  B. add path of the template files folder in the list "TEMPLATES.'DIR'"
  path -> BASE_DIR/'foldername'
  this line of code takes the django to go into folder to go as template files
7. Create urls.py in chat and add paths
8. In views.py, add the necessary functions
9. In djangoChat, add path('' , include("chat.urls")), to main urls.py file
10. To run the server -> python manage.py runserver
11. Create models in models.py/chat ->
    models are  like tables in database and we describe fields here
    - name = models.CharField(max_length=100)
    we created Room and Message classes here
12. make migrations to the django database by running the command  below:
  python manage.py makemigrations
  python manage.py migrate
13. Create superuse -> admin
  python manage.py createsuperuser
14. Register the models in admin.py
    from .models import Room, Message
    admin.site.register(Room)


    