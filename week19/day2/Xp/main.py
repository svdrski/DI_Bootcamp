#1
# def display_message():
#     print('We learn Python')
# display_message()


#2
# def favorite_book(title):
#     print(f'One of my favorite books is {title}')
# favorite_book('Wonderland')

#3
# def describe_city(city='Reykjavik', country='Iceland'):
#     print(f'{city} is in {country}')
# describe_city()

#4
# import  random
# def rand(x):
#     value = random.randint(1, 100)
#     message = 'success' if x == value else f'{x}, {value}'
#     print(message)
# rand(10)

#5
# def make_shirt(size='large', text='I love Python'):
#     print(f'The size of the shirt is {size} and the text is {text}')
# make_shirt()
# make_shirt('medium')
# make_shirt('small', 'I hate python')
# make_shirt(size='BIG', text='HAPPY')

#6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


def show_magicians(array):
    for i in array: print(i)

def make_great(arr):
    for i, value in enumerate(arr):
        arr[i] += 'the Great'

make_great(magician_names)

show_magicians(magician_names)