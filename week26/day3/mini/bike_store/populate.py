import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
import django
django.setup()

from rent.models import Customer, Address, VehicleType, VehicleSize
from faker import Faker

fake = Faker()

print(VehicleType.objects.all())
#
# def create_vehicle_types():
#     # Создайте записи для VehicleType
#     VehicleType.objects.create(name='Седан')
#     VehicleType.objects.create(name='Внедорожник')
#     VehicleType.objects.create(name='Грузовик')
#
# def create_vehicle_sizes():
#     # Создайте записи для VehicleSize
#     VehicleSize.objects.create(name='Маленький')
#     VehicleSize.objects.create(name='Средний')
#     VehicleSize.objects.create(name='Большой')
#
# # Вызовите ваши функции для создания записей
# create_vehicle_types()
# create_vehicle_sizes()

# def create_customers(number):
#     for _ in range(number):
#         address = Address(
#             address=fake.street_address(),
#             address2=fake.secondary_address(),
#             city=fake.city(),
#             country=fake.country(),
#             postal_code=fake.zipcode()
#         )
#         address.save()
#
#         customer = Customer(
#             first_name=fake.first_name(),
#             last_name=fake.last_name(),
#             email=fake.email(),
#             phone_number=fake.phone_number(),
#             address=address
#         )
#         customer.save()
#
#     print(f"CREATED {number} Customers")
#
# create_customers(100)
