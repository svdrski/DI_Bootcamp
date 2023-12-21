from django.urls import path
from .views import RentalList, VehicleList, VehicleAdd, RentalDetail, CustomerList, CustomerAdd,VehicleDetail, RentalStationList, RentalStationAdd,RentalStationDetail,StationDistribution, DistributeVehicles, MonthlyStats, PopularStation, PopularVehicleType

urlpatterns = [
    path('rent/rental/', RentalList.as_view(), name='rental-list'),
    path('rent/rental/<int:pk>/', RentalDetail.as_view(), name='rental-detail'),
    #
    path('rent/customer/', CustomerList.as_view(), name='customer-list'),
    path('rent/customer/add/', CustomerAdd.as_view(), name='customer-add'),

    path('rent/vehicle/', VehicleList.as_view(), name='vehicle-list'),
    path('rent/vehicle/add/', VehicleAdd.as_view(), name='vehicle-add'),
    path('rent/vehicle/<int:pk>/', VehicleDetail.as_view(), name='vehicle-detail'),
    #
    path('rent/station/', RentalStationList.as_view(), name='station-list'),
    path('rent/station/add/', RentalStationAdd.as_view(), name='station-add'),
    path('rent/station/<int:pk>/', RentalStationDetail.as_view(), name='station-detail'),
    #
    path('rent/station/distribution/', StationDistribution.as_view(), name='station-distribution'),
    path('rent/station/distribute/', DistributeVehicles.as_view(), name='distribute-vehicles'),


    path('rent/stats/monthly/', MonthlyStats.as_view(), name='monthly_stats'),
    path('rent/stats/popular_station/', PopularStation.as_view(), name='popular_station'),
    path('rent/stats/popular_vehicle_type/', PopularVehicleType.as_view(), name='popular_vehicle_type'),
]