#1 Tuple
#2
# result = [i**2 for i in range(11) if i %2 == 0]
# print(result)
#
# result = [i for i in range(11) if i %2 == 0 and  i% 2 == 0]
# print(result)
#
# student_list = [
#     {
#     "name": "John",
#     "age": 24
#     },
#     {
#     "name": "Anna",
#     "age": 22
#     },
#     {
#     "name": "Mike",
#     "age": 25
#     }
# ]
#
# for i in student_list:
#     print(f'{i['name']}, {i['age']}')


#
# def combine_words(*args, **kwargs):
#     print(args, kwargs)
#     first = kwargs.get('first')
#     second = kwargs.get('second')
#     third = kwargs.get('third')
#     print(f'{' '.join(args)} {first}, {second}, {third}')
#
# combine_words("Hello", "world", second="is", third="great!", first="Python")



class Vehicle():
    def __init__(self, type=str, brand=str, year=int):
        self.type = type
        self.brand = brand
        self.year = year

    def __str__(self):
        return (f'{self.type}, {self.year}, {self.brand}')

car = Vehicle("Автомобиль", "Toyota", 2022)

class ElectricCar(Vehicle):
    def __init__(self, type=str, brand=str, year=int, battery_capacity=int):
        super().__init__(type, brand, year)
        self.__battery_capacity = battery_capacity

    @property
    def battery_capacity(self):
        return self.__battery_capacity

    @battery_capacity.setter
    def battery_capacity(self, value):
        if value > 0:
            self.__battery_capacity = value

class BankAccount():

    accountscount = 0
    policy = 'HELLOOS'

    def __init__(self, balance, account_holder ):
        self.balance = balance
        self.account_holder = account_holder

    def deposit(self, value):
        self.balance = value

    def withdraw(self, value):
        if self.balance - value >= 0:
            self.balance -=value

    def viewbalance(self):
        print(self.balance)

    @classmethod
    def count(cls):
        return cls.accountscount

    @staticmethod
    def policy():
        return BankAccount.policy