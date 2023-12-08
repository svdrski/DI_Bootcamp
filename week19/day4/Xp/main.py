#1
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


#2
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]
#
# correct = 0
# wrong = 0
# wrongList = []
#
# for item in data:
#     if wrong >= 3:
#         print('You lose','Correct', correct, 'Wrong', wrong, wrongList )
#     answer = input(item['question'])
#     if answer == item['answer']:
#         correct += 1
#     else:
#         wrong += 1
#         wrongList.append(item)
#     print('Correct', correct, 'Wrong', wrong)


#3

# from datetime import datetime
# current_date = datetime.now()
# try:
#     def get_age(year, month, day):
#         birthDate = datetime(year, month, day)
#         return  int((current_date - birthDate).days / 365)
#     def can_retire(gender, date_of_birth):
#         age = get_age(*date_of_birth)
#         if gender.lower() == 'm':
#             return 'Accept' if age > 67 else 'Decline'
#         else: return  'Accept' if age > 62 else 'Decline'
#
#     gender = input('Enter gender (M or F)')
#     date = input('Enter birth date YYYY, M, D')
#     date = date.split(',')
#     date = tuple(map(lambda x: int(x), date))
#     print(can_retire(gender, date))
# except:
#     print('SOMETHHING WENT WRONG, try again')

#4
def calc(x):
    return sum(int(str(x) * i) for i in range(1,5) )
print(calc(3))

