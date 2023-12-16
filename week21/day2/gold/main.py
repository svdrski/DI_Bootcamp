#1
# import datetime
# holidays = {'New Year': datetime.date(datetime.date.today().year + 1, 1, 1),
#             'Christmas': datetime.date(datetime.date.today().year, 12, 25)}
# today = datetime.date.today()
# next = min(holidays.items(), key= lambda x: x[1] - today)
# def displ():
#     print(datetime.date.today())
#     print(f'Next holiday - {next}')
# displ()
import datetime
import random
import re

#2
# def calcAge():
#     born = input('Enter dirth date - YYYY,MM,DD').split(',')
#     res = list(map(int, born))
#     borndate = datetime.datetime(res[0],res[1],res[2])
#     age = (datetime.datetime.now() - borndate)
#     seconds = age.days * 24 * 60 * 60 + age.seconds
#     years = round((seconds / 60 / 60 / 24 / 365), 2)
#     print(f'''
#     Earth: orbital period {years} Earth days, or {seconds} seconds
#     Mercury: orbital period {years / 0.2408467} Earth years
#     Venus: orbital period {years / 0.61519726} Earth years
#     Mars: orbital period {years / 1.8808158} Earth years
#     Jupiter: orbital period {years / 11.862615} Earth years
#     Saturn: orbital period {years / 29.447498} Earth years
#     Uranus: orbital period {years / 84.016846} Earth years
#     Neptune: orbital period {years / 164.79132} Earth years
#     ''')
#
# calcAge()


#3
# sttr = 'k5k3q2g5z6x9bn'
# result = re.sub(r"[^\d]", "", sttr)
# print(result)

#4
# def Checker():
#     fullName = input('Enter full name')
#     pattern = re.compile(r'^[A-Z][a-z]+( [A-Z][a-z]+)?$')
#     print(bool(pattern.match(fullName)))
# Checker()

#5
import  string
def generator(value=0):
    len = value
    while len >30 or len < 6 : len = int(input('Enter password length 6 - 30'))

    digits = string.digits
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    special = '!@#$%^&*()_-+=<>?/{}'

    result = random.choice(digits) + random.choice(lowercase) + random.choice(uppercase) + random.choice(special)
    for i in range(len - 4):
        result += f'{random.choice(digits + lowercase + uppercase + special)}'
        
    print(result)

for i in range(6, 30):
    generator(i)