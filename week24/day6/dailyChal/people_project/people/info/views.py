from django.shortcuts import render
from django.http import HttpResponse
name = 'Bob Smith'
age = 35
country = 'USA'

people = ['bob','martha', 'fabio', 'john']

all_people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]



# Create your views here.

def display_person(request):
    return HttpResponse(f'{name}, {age}, {country}')

def display_people(req,):
    result = ', '.join([i.capitalize() for i in sorted(people)])
    return  HttpResponse(result)

def display_all_people(req):
  result = sorted(all_people, key=(lambda x: x['age']))
  return HttpResponse(result)