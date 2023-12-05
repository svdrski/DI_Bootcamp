#1

#  5 < 3 # true
#  3 == 3 # true
#  3 == "3" #false
#  "3" > 3  #err
# "Hello" == "hello"  #false



#2
# name = 'Hleb'
# age = 26
# shoe_size = 47
# info = (f'I am {name}, i am {age}, shoes {shoe_size}')
# print(info)


#3

# number = int(input('Enter number'))
# result = 'Even' if number % 2 == 0 else 'Odd'
# print(result)


#4
# height = int(input('Enter height:'))
# message = 'You are tall enough to ride' if height * 2.54 > 145 else 'You need to grow some more to ride'
# print(message)

#5
# my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit,
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco
#            laboris nisi ut aliquip ex ea commodo consequat.
#            Duis aute irure dolor in reprehenderit in voluptate velit
#            esse cillum dolore eu fugiat nulla pariatur.
#            Excepteur sint occaecat cupidatat non proident,
#            sunt in culpa qui officia deserunt mollit anim id est laborum."""
# print(len(my_text))



#6
# result = ''
# while True:
#     sentence = input('Enter sentence')
#     if "a" in sentence.lower():
#         print('A found, Try again')
#     elif  len(sentence) > len(result):
#         result = sentence
#         print(f'Wow {result}')


#7
# my_fav_numbers = {9,1,3,6,7}
# my_fav_numbers.update({5,8})
#
# my_fav_numbers.remove(9)
# friend_fav_numbers = {2,4,66,44,631,5,3}
#
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# # our_fav_numbers = my_fav_numbers | friend_fav_numbers
#
# print(our_fav_numbers)



#8
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
#
# basket.remove('Banana')
# basket.remove('Blueberries')
#
# basket.append('Kiwi')
# basket.insert(0, 'Apples')
#
# apples = basket.count("Apples")
# print(apples)
#
# basket.clear()
# print(basket)


#9
# ints = list(range(2, 6))
# floats = ints.copy()
# for i in range(len(floats)):
#     floats[i] -= 0.5
# result = sorted(ints + floats)
# print(result)


#10
# for i in range(21):
#  if i % 2 == 0:  print(i)


#11
# sum = 0
# while True:
#     age = input('Enter age, or calc to get results')
#     if age == 'calc':
#         print(sum)
#         break
#     age = int(age)
#     if 3 < age < 12:
#         sum += 10
#     elif age > 12:
#         sum +=15


names = ['Alex', 'Bob', 'Carl', 'Daniel']
result = []
for name in names:
    age = int(input(f'{name} enter your age'))
    if 16 <= age <= 21: result.append(name)
print(result)
