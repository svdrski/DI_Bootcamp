from rest_framework import serializers, viewsets
from .models import SchoolFacility, Laboratory
from .serializers import SchoolFacilitySerializer, LaboratorySerializer


# Create your views here.
class SchoolFacilityViewSet(viewsets.ModelViewSet):
    queryset = SchoolFacility.objects.all()
    serializer_class = SchoolFacilitySerializer

class LaboratoryViewSet(viewsets.ModelViewSet):
    queryset = Laboratory.objects.all()
    serializer_class = LaboratorySerializer
