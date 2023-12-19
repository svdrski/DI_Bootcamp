import json
import os
from django.conf import settings
json_path = os.path.join(settings.BASE_DIR, 'info/data.json')


def get_all_animals():
    with open(json_path, 'r') as file:
        data = json.load(file)
        animals = data['animals']
        for index, i  in enumerate(animals):
            i["familie"] = data['families'][index - 1]['name']
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

def add_animal(name, legs, weight, height, speed, family):
    with open(json_path, 'r') as file:
        data = json.load(file)
    animal = {'id':len(data)+2, 'name':name, 'legs':legs, 'weight':weight, 'height':height, 'speed':speed, 'family':family}
    data['animals'].append(animal)
    with open(json_path, 'w') as file:
        json.dump(data, file)

