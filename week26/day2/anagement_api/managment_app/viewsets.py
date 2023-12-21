from rest_framework import viewsets
from .models import Department, Employee
from .serializers import DepartmentHyperlinkedSerializer, EmployeeHyperlinkedSerializer
from rest_framework.routers import DefaultRouter


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentHyperlinkedSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeHyperlinkedSerializer


router = DefaultRouter()
router.register(r'departments', DepartmentViewSet)
router.register(r'employees', EmployeeViewSet)
