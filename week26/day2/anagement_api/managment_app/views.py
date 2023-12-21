from django.shortcuts import render
from rest_framework.views import APIView
from .models import Department, Employee, Project, Task
from .serializers import DepartmentHyperlinkedSerializer, EmployeeHyperlinkedSerializer, TaskHyperlinkedSerializer, ProjectHyperlinkedSerializer
from django.http import HttpResponse
# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .permissions  import IsDepartmentAdmin



class DepartmentAPIView(APIView):
    permission_classes = [IsDepartmentAdmin]

    def get(self, req):
        departs = Department.objects.all()
        serial = DepartmentHyperlinkedSerializer(departs, many=True, context={'request': req})
        return HttpResponse(serial.data)

    def post(self, req):
        serial = DepartmentHyperlinkedSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        else: return HttpResponse(serial.errors)


    def put(self, req, pk):
        depart = Department.objects.get(pk=pk)
        serial = DepartmentHyperlinkedSerializer(depart, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Department.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')


class EmployeeAPIView(APIView):
    # permission_classes = (IsAuthenticated,)
    permission_classes = [IsDepartmentAdmin]
    serializer_class = EmployeeHyperlinkedSerializer
    def get(self, req):
        emp = Employee.objects.all()
        serial = EmployeeHyperlinkedSerializer(emp, many=True, context={'request': req})
        return HttpResponse(serial.data)

    def post(self, req):
        serial = EmployeeHyperlinkedSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status=status.HTTP_201_CREATED,
                            headers={'Location': f'/tasks/{serial.data["id"]}/'})
        else: return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)



    def put(self, req, pk):
        emp = Employee.objects.get(pk=pk)
        serial = EmployeeHyperlinkedSerializer(emp, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Employee.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')




class ProjectAPIView(APIView):
    permission_classes = [IsDepartmentAdmin]
    serializer_class = ProjectHyperlinkedSerializer

    def get(self, req):
        prj = Project.objects.all()
        serial = ProjectHyperlinkedSerializer(prj, many=True, context={'request': req})
        return HttpResponse(serial.data)

    def post(self, req):
        serial = ProjectHyperlinkedSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        else: return HttpResponse(serial.errors)


    def put(self, req, pk):
        emp = Project.objects.get(pk=pk)
        serial = ProjectHyperlinkedSerializer(emp, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Project.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')





class TaskAPIView(APIView):
    permission_classes = [IsDepartmentAdmin]
    serializer_class = TaskHyperlinkedSerializer
    def get(self, req):
        prj = Task.objects.all()
        serial = TaskHyperlinkedSerializer(prj, many=True, context={'request': req})
        return HttpResponse(serial.data)

    def post(self, req):
        serial = TaskHyperlinkedSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status=status.HTTP_201_CREATED,
                            headers={'Location': f'/tasks/{serial.data["id"]}/'})
        else:
            return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)


    def put(self, req, pk):
        emp = Task.objects.get(pk=pk)
        serial = TaskHyperlinkedSerializer(emp, data=req.data)
        if serial.is_valid():
            serial.save()
            return HttpResponse(serial.data)
        return HttpResponse(serial.errors)

    def delete(self, req, pk):
        dep = Task.objects.get(pk=pk)
        dep.delete()
        return HttpResponse('Deleted')



