from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Count

from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from .models import Rental, Vehicle, Customer,RentalStation, VehicleAtRentalStation
from .serialaizers import  RentalSerializer, VehicleSerializer, CustomerSerializer, RentalStationSerializer, VehicleAtRentalStationSerializer

class RentalList(APIView):

    def get(self, req, format=None):
        data = Rental.objects.all().order_by('-return_date', 'rental_date')
        serial = RentalSerializer(data, many=True)
        return Response(serial.data)

    def post(self, req, format=None):
        serializer = RentalSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RentalDetail(APIView):
    def get(self, req, pk, format=None):
        value = Rental.objects.get(pk=pk)
        print(value)
        serial = RentalSerializer(value)
        return  Response(serial.data)

    def put(self, req, pk,):
        value = Rental.objects.get(pk=pk)
        serial = RentalSerializer(value, data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status.HTTP_201_CREATED)
        return Response(serial.errors, status.HTTP_400_BAD_REQUEST)

    def delete(self, req, pk):
        value = Rental.objects.get(pk=pk)
        value.delete()
        return Response('DELETED')


class CustomerList(APIView):
    def get(self, req, format=None):
        value = Customer.objects.all().order_by('first_name')
        serial = CustomerSerializer(value, many=True)
        return Response(serial.data)


class CustomerAdd(APIView):
    def post(self, req, format=None):
        serial = CustomerSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status.HTTP_201_CREATED)
        return Response(serial.errors, status.HTTP_400_BAD_REQUEST)



class VehicleList(APIView):
    def get(self,req):
        data = Vehicle.objects.all().order_by('vehicle_type')
        serial = VehicleSerializer(data, many=True)
        return Response(serial.data)


class VehicleAdd(APIView):
    def post(self, req, format=None):
        serial = VehicleSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return  Response(serial.data, status=status.HTTP_201_CREATED)
        return Response(serial.errors, status=status.HTTP_400_BAD_REQUEST)


class VehicleDetail(APIView):
    def get(self, req, pk):
        value = Vehicle.objects.get(pk=pk)
        serial = VehicleSerializer(value)
        return Response(serial.data)

    def put(self, req, pk):
        value = Vehicle.objects.get(pk=pk)
        serial = VehicleSerializer(value, req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status.HTTP_201_CREATED)
        return Response(serial.errors, status.HTTP_400_BAD_REQUEST)

    def delete(self, req, pk):
        value = Vehicle.objects.get(pk=pk)
        value.delete()
        return Response('DELETED')


class RentalStationList(APIView):
    def get(self, req):
        value = RentalStation.objects.all()
        serial = RentalStationSerializer(value, many=True)
        return Response(serial.data, status.HTTP_200_OK)


class RentalStationAdd(APIView):
    def post(self, req):
        serial = RentalStationSerializer(data=req.data)
        if serial.is_valid():
            serial.save()
            return Response(serial.data, status.HTTP_201_CREATED)
        return Response(serial.errors)


class RentalStationDetail(APIView):
    def get(self, req, pk):
        value = RentalStation.objects.get(pk=pk)
        serial = RentalStationSerializer(value)
        return Response(serial.data, status.HTTP_200_OK)

class StationDistribution(APIView):
    def get(self, request, format=None):
        stations = RentalStation.objects.all()

        distribution = {}
        for station in stations:
            vehicle_count = VehicleAtRentalStation.objects.filter(station=station).count()
            distribution[station.name] = vehicle_count

        return Response(distribution)


class DistributeVehicles(APIView):
    def post(self, request, format=None):
        stations = RentalStation.objects.all()

        available_vehicles = Vehicle.objects.filter(current_station__isnull=True)

        if not available_vehicles.exists():
            return Response({"message": "No available vehicles to distribute"})
        for station in stations:
            vehicles_to_assign = available_vehicles[:1]
            if vehicles_to_assign.exists():
                vehicle = vehicles_to_assign[0]
                VehicleAtRentalStation.objects.create(vehicle=vehicle, arrival_date=datetime.now().date(), departure_date=None)
                vehicle.current_station = station
                vehicle.save()

        return Response({"message": "Vehicles distributed successfully"})
