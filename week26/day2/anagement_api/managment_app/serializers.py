from rest_framework import serializers
from  .models import Department, Employee, Task, Project


class DepartmentHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='department-detail')

    class Meta:
        model = Department
        fields = '__all__'
        extra_kwargs = {
            'url': {'view_name': 'department-detail'}
        }

class EmployeeHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='employee-detail')

    class Meta:
        model = Employee
        fields = '__all__'
        extra_kwargs = {
            'url': {'view_name': 'employee-detail'}
        }

class TaskHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='task-detail')

    class Meta:
        model = Task
        fields = '__all__'
        extra_kwargs = {
            'url': {'view_name': 'task-detail'}
        }

class ProjectHyperlinkedSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='project-detail')

    class Meta:
        model = Project
        fields = '__all__'
        extra_kwargs = {
            'url': {'view_name': 'project-detail'}
        }

# Или если вам не нужны гиперссылки:
class DepartmentBasicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'




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


