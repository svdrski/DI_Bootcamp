from rest_framework import serializers
from  .models import Department, Employee, Task, Project


class DepartmentSerial(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class EmployeeSerial(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class TaskSerial(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class ProjectSerial(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'