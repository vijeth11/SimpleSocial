# SimpleSocial
This is a Social website where users can add new post and comment .

# TechStack
  - Django
  - Django Rest Framework
  - Angular
  - Docker

# Docker Commands
  ```
  //File Sharing configuration in your Docker for Windows app only for windows system
  docker build .
  docker-compose up // to run containers
  docker-compose down // to stop containsers
  docker-compose run <app-name> sh -c "python manage.py test"
  ```

# Command to Create SSH to add in AWS
https://www.udemy.com/course/django-python/learn/lecture/7371360#overview ## follow steps from this
```
ssh-keygen -t rsa -b 4096 -C "vijeth11@yahoo.co.in" //create the pair-key
ssh ubuntu@ec2-13-232-131-135.ap-south-1.compute.amazonaws.com  
```
