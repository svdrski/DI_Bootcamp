from django.shortcuts import render
from rest_framework.decorators import api_view

# Create your views here.
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from rest_framework.generics import GenericAPIView
from .mixins import StudentOperationsMixin



class StudentList(StudentOperationsMixin, GenericAPIView):
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class StudentDetail(StudentOperationsMixin, GenericAPIView):
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        date_joined = request.GET.get('date_joined')
        if date_joined:
            students = Student.objects.filter(date_joined=date_joined)
            serial = StudentSerializer(students, many=True)
            return Response(serial.data)
        else:
            sudents = Student.objects.all()
            serial = StudentSerializer(sudents, many=True)
            return Response(serial.data)

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

