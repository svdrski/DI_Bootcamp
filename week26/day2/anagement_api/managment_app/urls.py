from django.urls import path
from .views import DepartmentAPIView, EmployeeAPIView, ProjectAPIView, TaskAPIView


urlpatterns = [
    path('departments/', DepartmentAPIView.as_view()),
    path('employees/', EmployeeAPIView.as_view()),
    path('projects/', ProjectAPIView.as_view()),
    path('tasks/', TaskAPIView.as_view())
]

