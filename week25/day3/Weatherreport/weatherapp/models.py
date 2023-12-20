from django.db import models

# Create your models here.

class Report(models.Model):
    location = models.CharField(max_length=200)
    temperature = models.FloatField
    created_at = models.DateTimeField(auto_now_add=True)