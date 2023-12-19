from django.shortcuts import render
from django.http import HttpResponse
from . import data

def display_all_animals(req):
    print(data.animals)
    return HttpResponse(data.animals)


def display_all_families(req):
    result = [i['name'] for i in data.families]
    return HttpResponse(result)

def display_one_animal(request, animal_id):
    animal = next((i.items() for i in data.animals if i['id'] == animal_id), None)
    return HttpResponse(animal or 'Not found')

def display_animal_per_family(req, family_id):
    animal = [i.items() for i in data.animals if family_id == i['family']]
    return HttpResponse(animal)

