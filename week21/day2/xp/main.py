# #1
#
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
#
#     def __repr__(self):
#         return f'{self.amount} {self.currency}s'
#
#     def __str__(self):
#         return f'{self.amount} {self.currency}s'
#
#     def __int__(self):
#         return self.amount
#
#     def __call__(self):
#         return  self.amount
#
#     def __add__(self, other):
#         return self.amount + other.amount
#
#     def __iadd__(self, other):
#         if isinstance(other, Currency) :
#             if self.currency != other.currency: raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             self.amount += other.amount
#             return self
#         else:
#              self.amount += other
#              return self
#
#
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)
#
# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1() + 5)
# print(c1 + c2)
# c1 += 5
# print(c1)
# c1 += c2
# print(c1)
# c1 + c3
# print(c1 + c3)


#3
# import string
# import random
#
# strss = ''.join(random.choice(string.ascii_letters) for i in range(5))
# print(strss)

#4
# import  datetime
# def showtime():
#     print(datetime.date.today())
# showtime()


#5
# import datetime
# def show():
#     until = datetime.date(datetime.date.today().year + 1,1,1)
#     print(f'the 1st of January is in {(until - datetime.date.today()).days} days')
# show()
#
#
# #6
# def showtime(year, month, day):
#     birth = datetime.date(year, month, day)
#     print((datetime.date.today() - birth).days * 24 * 60)
#
# showtime(1993,1,1)


#7
from faker import Faker
fake = Faker()
users = []
for i in range(10):
    user = {'name': fake.name(), 'address': fake.address(), 'langage_code': fake.locales}
    users.append(user)
print(users)