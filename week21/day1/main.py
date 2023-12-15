# #задать значение по умолчанию
# from collections import defaultdict
#
# nums = defaultdict(int)
# nums['one'] = 1
# nums['two'] = 2
#
# print([nums['two']])
# print([nums['fefe']])
#
#
# #Посчитать сколько кол-во повторений значения в массиве
# from  collections import  Counter
# list = [1,2,3,4,1,2,6,7,3,8,1,2,2]
# print(Counter(list)[3])
#
#
# #Добавить или удалить в конец / начало списка
# from  collections import deque
# lists = ["a","b","c"]
# deq = deque(lists)
# print(deq)
# deq.append('z')
# print(deq)
# deq.appendleft('F')
# print(deq)
# deq.popleft()
# print(deq)
#
#
#
# # превращает кортеж в обьект; создается как класс и можно вызывать по имени
# from collections import namedtuple
#
# Student = namedtuple('Student', 'fname, lname, age')
# s1 = Student('Peter', 'James', '13')
# print(s1.fname)
# print(s1.age)
#
#
#
# #создает лист из словарей
# import collections
#
# dictionary1 = { 'a' : 1, 'b' : 2 }
# dictionary2 = { 'c' : 3, 'b' : 4 }
#
#
# result = collections.ChainMap(dictionary1, dictionary2)
# print(result.maps)
#
# print([dictionary1, dictionary2])
#
#
# from collections import OrderedDict
# order = OrderedDict()
# order['a'] = 1
# order['b'] = 2
# order['c'] = 3
#
# order['FFFF'] = order.pop('b')
# print(order)
#
#
# import  itertools
#
# res = itertools.count(start = 0, step = 3)
#
# for number in res:
# # termination condition
#     if number < 8:
#         print (number)
#     else:
#         break



# print 2 three times
# import itertools
#
# result = itertools.cycle('12345')
# counter = 0
#
# for number in result:
# # termination condition
#     if counter < 10 :
#         print (number)
#         counter = counter + 1
#     else:
#         break
#
#
#
#
# import itertools
#
# result = itertools.repeat('hello', times = 2)
#
# for word in result:
#     print (word)
#






# Проходит по каждому значению из всех листов
import itertools
import os

# list_one = ['a', 'b', 'c']
# list_two =['d', 'e', 'f']
# list_three = ['1', '2', '3']
#
# result = itertools.chain(list_one, list_two, list_three)
#
# for element in result:
#   print (element)


#выводит если в соответствубщем True
# names = ['Alice', 'James', 'Matt']
# have_flu = [True, True, False]
# result = itertools.compress(names, have_flu)
# for element in result:
#   print (element)
#


#фильтрует до тех пор пока не появится False
# my_list = [0, 0, 1, 2, 0, 4,4,4,0,0]
#
# result = itertools.dropwhile(lambda x: x == 0, my_list)
#
# for elements in result:
#   print (elements)


# class Dog():
#     dogs_king = "Bernie IV"
#
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog
#
#     def bark(self):
#         print("{} barks ! WAF".format(self.name))
#
#     def walk(self, number_of_meters):
#         print("{} walked {} meters".format(self.name, number_of_meters))
#
#     def rename(self, new_name):
#         self.name = new_name
#
# my_dog = Dog("Rex")
# my_dog.rename("Paul")
#
# print("The king of the dogs is:", Dog.dogs_king)
#
#
# class Dog():
#     number_of_dogs = 0
#     dogs_king = "Bernie IV"
#
#     # Initializer / Instance Attributes
#     def __init__(self, name_of_the_dog):
#         print("A new dog has been initialized !")
#         print("His name is", name_of_the_dog)
#         self.name = name_of_the_dog
#         # Increment the number of dogs
#         Dog.number_of_dogs += 1
#
#     def bark(self):
#         print("{} barks ! WAF".format(self.name))
#
#     def walk(self, number_of_meters):
#         print("{} walked {} meters".format(self.name, number_of_meters))
#
#     def rename(self, new_name):
#         self.name = new_name
#
# my_dog = Dog("Rex")
# my_dog2 = Dog("Bernie V")
# print("Curently, there are {} dogs".format(Dog.number_of_dogs))
#
#

# class Circle:
#     color = "red"
#
#     def __init__(self, diameter):
#         self.diameter = diameter
#
#     def grow(self, factor=2):
#         self.diameter = self.diameter * factor
#
#     def get_color(self):
#        return Circle.color
#
# circle1 = Circle(2)
# print(circle1.color)
# print(Circle.color)
# print(circle1.get_color())
# circle1.grow(3)
# print(circle1.diameter)
#
# class Zall:
#     @staticmethod
#     def add(a,b):
#         return a + b
#
#
# print(Zall.add(3,5))
#
# class MyClass:
#     class_variable = 10
#
#     def __init__(self, value):
#         self.instance_variable = value
#
#     @classmethod
#     def print_class_variable(cls):
#         print(cls.class_variable)
#
# # Вызов метода класса
# MyClass.print_class_variable()
# # Вывод: 10
#
# # Создание экземпляра класса
# obj = MyClass(5)
#
# # Вызов метода класса через экземпляр
# obj.print_class_variable()
# # Вывод: 10
#
# class Circle:
#     def __init__(self, radius):
#         self._radius = radius
#
#     @property
#     def radius(self):
#         print("Getting radius")
#         return self._radius
#
#     @radius.setter
#     def radius(self, value):
#         print("Setting radius")
#         if value < 0:
#             raise ValueError("Radius cannot be negative")
#         self._radius = value
#
#     @property
#     def area(self):
#         print("Calculating area")
#         return 3.14 * self._radius ** 2
#
# # Создание экземпляра класса
# my_circle = Circle(5)
#
# # Обращение к свойству через геттер
# print(my_circle.radius)
# # Вывод: Getting radius
# # Вывод: 5
#
# # Обращение к свойству через сеттер
# my_circle.radius = 7
# # Вывод: Setting radius
#
# # Обращение к вычисляемому свойству
# print(my_circle.area)
# # Вывод: Calculating area
# # Вывод: 153.86
#
#
#
# class Circle:
#     def __init__(self, radius):
#         self._radius = radius
#
#     @property
#     def radius(self):
#         print("Getting radius")
#         return self._radius
#
#     @radius.setter
#     def radius(self, value):
#         print("Setting radius", value)
#         if value < 0:
#             raise ValueError("Radius cannot be negative")
#         self._radius = value
#
# # Создание экземпляра класса
# my_circle = Circle(5)
#
# # Обращение к свойству через геттер
# print(my_circle.radius)
#
# my_circle.radius = 7
#
# my_circle.radius = -3


# class MyClass(object):
#     count = 0
#
#     def __init__(self, val):
#         self.val = val
#         MyClass.count += 1
#
#     def set_val(self, newval):
#         self.val = newval
#
#     def get_val(self):
#         return self.val
#
#     @classmethod
#     def get_count(cls):
#         return cls.count
#
# object_1 = MyClass(10)
# print("\nValue of object : %s" % object_1.get_val())
# print(MyClass.get_count())
#
# object_2 = MyClass(20)
# print("\nValue of object : %s" % object_2.get_val())
# print(MyClass.get_count())
#
#
#
# class MyClass(object):
#     count = 0
#
#     def __init__(self, val):
#         self.val = self.filterint(val)
#         MyClass.count += 1
#
#     @staticmethod
#     def filterint(value):
#         if not isinstance(value, int):
#             print("Entered value is not an INT, value set to 0")
#             return 0
#         else:
#             return value
#
#
# a = MyClass(5)
# b = MyClass(10)
# c = MyClass(15)
#
# print(a.val)
# print(b.val)
# print(c.val)
# print(a.filterint(100))
#
#
# class Person:
#   def __init__(self, name, age):
#       self.name = name
#       self.age  = age
#
#   def __repr__(self):
#       return f"{self.__class__.__name__} : {self.name} {self.age}"
#
# nss = Person('sss', 22)
#
# print(nss)
#
#
#
#
# class Car:
#     def __init__(self, name, age):
#         self.car  = name
#         self.age = age
#
#     def __repr__(self):
#         return f'{self.__class__.__name__} : {self.car} {self.age}'
#
#
# voloc = Car('volco', 22)
#
# print(voloc)
#
#
# class Person:
#   def __init__(self, name, lastName):
#       self.name = name
#       self.lastName = lastName
#
#   def __repr__(self):
#       return f"{self.__class__.__name__} : {self.name} {self.lastName}"
#
#   def __add__(self, other):
#       return Person(self.name,  other.lastName)
#
# father = Person('John', 'Snow')
# mother = Person('Kaleesi', 'MotherOfDragons')
# # using the __add__() method
# dragonChild = father + mother
#
# print(dragonChild)
# # >> Person : John MotherOfDragons // __add__ is called to add two objects
#
#
# class PrintList(object):
#
#     def __init__(self, my_list):
#         self.mylist = my_list
#
#     def __repr__(self):
#         return str(self.mylist)
#
#
# printlist = PrintList(["a", "b", "c"])
# print(printlist.__repr__())

# class Car:
#     def __init__(self, model):
#         self.model = model
#         self.wheels = {
#             'left': 10
#         }
#
#     def __repr__(self):
#         return f'{self.__class__.__name__}, {self.model}'
#
#     def __Kuku__(self):
#         self.model = self.model + 'KUKU'
#         return self.model
#     def __call__(self):
#         print('JHIOO')
#
#     def __getitem__(self, item):
#         return self.wheels[item]
#
# Volvo = Car('volvo')
#
# print(Volvo())
# print(Volvo['left'])


class SuperList(list):

    def __len__(self):
        return 1000

sl1 = SuperList()
print(len(sl1))

sl1.append(22)
sl1.append(223)

print(sl1[0])
print(sl1[1])

print(issubclass(SuperList, list))

import sys

sys.argv