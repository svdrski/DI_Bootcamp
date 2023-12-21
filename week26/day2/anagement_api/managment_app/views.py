from django.shortcuts import render
from rest_framework.views import APIView
from .models import Department, Employee, Project, Task
from .serializers import DepartmentSerial, EmployeeSerial, ProjectSerial, TaskSerial
from django.http import HttpResponse
# Create your views here.
from rest_framework import status
from rest_framework.response import Response


class DepartmentAPIView(APIView):

    def get(self, req):
        departs = Department.objects.all()
        serial = DepartmentSerial(departs, many=True)
        return HttpResponse(serial.data)

    def post(self, req):
        serial = DepartmentSerial(data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        else: return HttpResponse(serial.errors)


    def put(self, req, pk):
        depart = Department.objects.get(pk=pk)
        serial = DepartmentSerial(depart, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Department.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')


class EmployeeAPIView(APIView):

    def get(self, req):
        emp = Employee.objects.all()
        serial = EmployeeSerial(emp, many=True)
        return HttpResponse(serial.data)

    def post(self, req):
        serial = EmployeeSerial(data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status=status.HTTP_201_CREATED,
                            headers={'Location': f'/tasks/{serial.data["id"]}/'})
        else: return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)



    def put(self, req, pk):
        emp = Employee.objects.get(pk=pk)
        serial = EmployeeSerial(emp, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Employee.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')




class ProjectAPIView(APIView):

    def get(self, req):
        prj = Project.objects.all()
        serial = ProjectSerial(prj, many=True)
        return HttpResponse(serial.data)

    def post(self, req):
        serial = ProjectSerial(data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        else: return HttpResponse(serial.errors)


    def put(self, req, pk):
        emp = Project.objects.get(pk=pk)
        serial = ProjectSerial(emp, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Project.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')





class TaskAPIView(APIView):

    def get(self, req):
        prj = Task.objects.all()
        serial = TaskSerial(prj, many=True)
        return HttpResponse(serial.data)

    def post(self, req):
        serial = TaskSerial(data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status=status.HTTP_201_CREATED,
                            headers={'Location': f'/tasks/{serial.data["id"]}/'})
        else:
            return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)


    def put(self, req, pk):
        emp = Task.objects.get(pk=pk)
        serial = TaskSerial(emp, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Task.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')



