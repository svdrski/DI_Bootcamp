#1
# list1 = [1,2,3,4]
# list2 = [5,6,7,8]
#
# list1.extend(list2)
# print(list1)


#2
# for num in range(1500, 2500):
#     if num % 7 == 0 and num % 5 == 0:
#         print(num)

#3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# name = input('Enter name')
# if name in names:
#     print(names.index(name))


#4
# result = 0
# for num in range(3):
#     ask_num = int(input('Enter number:'))
#     if ask_num > result: result = ask_num
# print(result)


#5
# alphabet = 'abcdefghijklmnopqrstuvwxyz'
# for let in alphabet:
#     if let in 'aeiou':
#         print(let, 'vowel')
#     else: print(let, 'consonant')


#6
# words = []
#
# for i in range(7):
#     word = input('Enter word: ')
#     words.append(word)
#
# letter = input('Enter letter: ')
#
# for word in words:
#     if letter in word:
#         print(word, word.index(letter))
#     else: print(f'Not found {word} {letter}')


#7
# value = range(1, 1000001)
#
# print(min(value), max(value))
# print(sum(value))


#8
# value = input('Enter numbers')
# list = value.split(',')
# tuple = tuple(list)
# print(list, tuple)

#9
import  random
total = 0
won = 0
lost = 0
try:
    while True:
        value = input('Enter random num 1 - 9 or quit: ')
        if value == 'quit':
            total = won + lost
            print(f'Total {total}, won {won}, lost {lost}')
            break
        randvalue = random.randint(1,9)
        value = int(value)
        if value == randvalue:
            won +=1
            print('Winner')
        else:
            lost +=1
            print('better luck next time', randvalue)
except ValueError:
    print('Quit not correct')