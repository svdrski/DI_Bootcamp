#1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
#
# print(dict(zip(keys,values)))


#2
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8, 'gog': 2}
# def calculate(dict):
#     sum= 0
#     for item in family.values():
#         if item < 3:
#             pass
#         elif 3 < item < 12:
#             sum += 10
#         else: sum += 15
#     return sum
#
# family = {}
# while True:
#   value = input('Enter name and age with comma or calc to result')
#   if value == 'calc': print(calculate(family)) ; break
#   value = list(value.split(','))
#   name, age = value
#   family.update({name: int(age)})


#3
# brand ={
#     "name": "Zara",
#     "creation_date": 1975,
#     "creator_name": "Amancio Ortega Gaona",
#     "type_of_clothes": ['men', 'women', 'children', 'home'],
#     "international_competitors": ['Gap', 'H&M', 'Benetton'],
#     'number_stores': 7000,
#     'major_color': {
#         'France': 'blue',
#         'Spain': 'red',
#         'US': ['pink', 'green']
#     }
#
# }
#
# brand['number_stores'] = 2
# print(f'{brand['name']} clients are ????')
# brand['country_creation'] = 'Spain'
# if 'international_competitors' in brand.keys(): brand['international_competitors'].append('Desigual')
# del brand['creation_date']
# print(brand['international_competitors'][-1])
# print(brand['major_color']['US'])
# print(len(brand.values()))
# print(brand.keys())
# more_on_zara = {
#     'creation_date': 1975,
#     'number_stores': 10000
# }
# brand.update(more_on_zara)
# print(brand['number_stores'])


#4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
#
# print({item: i for i,item  in enumerate(users)})
# print({i: item for  i, item in enumerate(users)})
# print({item: i for i,item  in enumerate(sorted(users))})
# print({item: i for i,item  in enumerate(users) if 'i' in item})
# print({item: i for i,item  in enumerate(users) if item[0] == 'P' or item[0] == 'M'})

