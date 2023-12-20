from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse


@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        sudents = Student.objects.all()
        serial = StudentSerializer(sudents, many=True)
        return HttpResponse(serial.data)

    if request.method == 'POST':
        serial = StudentSerializer(data=request.data)
        if serial.is_valid():
            serial.save()
            return  HttpResponse(serial.data)
        return HttpResponse(serial.errors)




@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def student_detail(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'GET':
        serial = StudentSerializer(student)
        return HttpResponse(serial)

    elif request.method == 'PUT':
        serial = StudentSerializer(student, data=request.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    elif request.method == 'DELETE':
        student.delete()
        return HttpResponse('ALALAL')

