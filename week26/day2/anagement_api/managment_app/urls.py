from django.urls import path, include
from .views import DepartmentAPIView, EmployeeAPIView, ProjectAPIView, TaskAPIView
from .viewsets import router

urlpatterns = [
    path('departments/', DepartmentAPIView.as_view(), name='department-list'),
    path('employees/', EmployeeAPIView.as_view(), name='employee-list'),
    path('projects/', ProjectAPIView.as_view(), name='project-list'),
    path('tasks/', TaskAPIView.as_view(), name='task-list'),
    path('api/', include(router.urls)),
]
