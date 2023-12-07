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


#5
# import  random
# def rand(value):
#     gen_random = random.randint(0, 100)
#     print('Success') if value == gen_random else print(value, gen_random)
# rand(33)


#6
# import  random
# def get_random_temp(season):
#     diapason = -10, 40
#     if season == 'winter' : diapason = -10, 10
#     if season == 'spring' : diapason = 0, 16
#     if season == 'summer' : diapason = 15, 40
#     if season == 'autumn' : diapason = 5, 1
#     return random.randint(diapason[0], diapason[1])
#
# def main():
#     season = input('Enter season - summer’, ‘autumn’ ‘winter’, ‘spring’')
#     rand_temp = get_random_temp(season)
#     print(f'The temperature right now is {float(rand_temp)} degrees Celsius')
#     if rand_temp < 0:
#         print('Brrr, that’s freezing! Wear some extra layers today')
#     elif 0 < rand_temp < 16:
#         print('Quite chilly! Don’t forget your coat')
#     elif 16 < rand_temp <23:
#         print('between 16 and 23')
#     elif 23 < rand_temp < 32:
#         print('between 24 and 32')
#     elif 32 < rand_temp < 40:
#         print('between 32 and 40')
# main()


#7
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

correct = 0
wrong = 0
wrongList = []

for item in data:
    if wrong >= 3:
        print('You lose','Correct', correct, 'Wrong', wrong, wrongList )
    answer = input(item['question'])
    if answer == item['answer']:
        correct += 1
    else:
        wrong += 1
        wrongList.append(item)
    print('Correct', correct, 'Wrong', wrong)