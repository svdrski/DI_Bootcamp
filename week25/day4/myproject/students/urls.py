from .views import student_list, student_detail
from django.urls import path


urlpatterns = [
    path('students/', student_list),
    path('students/<int:pk>/', student_detail)
]