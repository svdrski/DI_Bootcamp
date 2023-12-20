from django.db import models
from django.utils import timezone

# Create your models here.

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    date_joined = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.first_name}, {self.last_name}'

