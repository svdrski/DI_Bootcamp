from django.db import models

# Create your models here.


class SchoolFacility(models.Model):
    facility_name = models.CharField(max_length=255)
    usage_purpose = models.TextField()

class Laboratory(SchoolFacility):
    equipment_list = models.TextField()
