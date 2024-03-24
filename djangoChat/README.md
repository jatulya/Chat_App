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