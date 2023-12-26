from django.http import HttpResponse
import json
import os
from django.conf import settings
json_path = os.path.join(settings.BASE_DIR, 'info/data.json')


def get_all_animals():
    with open(json_path, 'r') as file:
        data = json.load(file)
        animals = data['animals']
        return animals

def get_all_families():
    with open(json_path, 'r') as file:
        data = json.load(file)
        families = [i['name'] for i in data['families']]
        return  families

def get_one_animal(animal_id):
    with open(json_path, 'r') as file:
        data = json.load(file)
        for i in data['animals']:
            if i['id'] == animal_id:
                return i.items()
        return None


def get_animals_per_family(family_id):
    with open(json_path, 'r') as file:
        data = json.load(file)
        result = [i for i in data['animals'] if i["family"] == family_id]
        return result

def add_one_animal(name, legs, weight, height, speed, family):
    with open(json_path, 'r') as file:
        data = json.load(file)
    animal = {'id':len(data)+2, 'name':name, 'legs':legs, 'weight':weight, 'height':height, 'speed':speed, 'family':family}
    data['animals'].append(animal)
    with open(json_path, 'w') as file:
        json.dump(data, file)







def display_all_animals(req):
    # print(data.animals)
    # return HttpResponse(data.animals)
    values = get_all_animals()
    print(values)
    return HttpResponse(values)


def display_all_families(req):
    # result = [i['name'] for i in data.families]
    result = get_all_families()
    return HttpResponse(result)

def display_one_animal(request, animal_id):
    # animal = next((i.items() for i in data.animals if i['id'] == animal_id), None)
    animal = get_one_animal(animal_id)
    return HttpResponse(animal or 'Not found')

def display_animal_per_family(req, family_id):
    # animal = [i.items() for i in data.animals if family_id == i['family']]
    animal = get_animals_per_family(family_id)

    return HttpResponse(animal)

def add_animal(request):
    name = request.GET.get('name', '')
    legs = request.GET.get('legs', '')
    weight = request.GET.get('weight', '')
    height = request.GET.get('height', '')
    speed = request.GET.get('speed', '')
    family = request.GET.get('family', '')
    add_one_animal(name, legs, weight, height, speed, family)

    return HttpResponse('Added')



