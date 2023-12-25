from django.shortcuts import render
from django.http import HttpResponse
from . import data
from . import read_data

def display_all_animals(req):
    # print(data.animals)
    # return HttpResponse(data.animals)
    # values = read_data.get_all_animals()
    # print(values)
    # return HttpResponse(values)
    all_animals = data.animals
    values = ''
    for animal in all_animals:
        animal_info = (
            f"Name: {animal['name']},"
            f"Legs: {animal['legs']}, "
            f"Weight: {animal['weight']}kg, "
            f"Height: {animal['height']}cm, "
            f"Speed: {animal['speed']}km/h "
        )
        values += animal_info
    return HttpResponse(values)


def display_all_families(req):
    # result = [i['name'] for i in data.families]
    result = read_data.get_all_families()
    return HttpResponse(result)

def display_one_animal(request, animal_id):
    # animal = next((i.items() for i in data.animals if i['id'] == animal_id), None)
    animal = read_data.get_one_animal(animal_id)
    return HttpResponse(animal or 'Not found')

def display_animal_per_family(req, family_id):
    # animal = [i.items() for i in data.animals if family_id == i['family']]
    animal = read_data.get_animals_per_family(family_id)

    return HttpResponse(animal)

def add_animal(request):
    name = request.GET.get('name', '')
    legs = request.GET.get('legs', '')
    weight = request.GET.get('weight', '')
    height = request.GET.get('height', '')
    speed = request.GET.get('speed', '')
    family = request.GET.get('family', '')
    read_data.add_animal(name, legs, weight, height, speed, family)

    return HttpResponse('Added')
