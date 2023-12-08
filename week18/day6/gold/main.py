#1 #2 #3
birthdays = {
    'Alex':"2000/10/20",
    'Bob': "2002 / 10 / 22",
    'Carl': "2003 / 10 / 27",
    'Daniel': "2004 / 4 / 20",
    'Evan': "2002 / 4 / 21",
}

# print('You can look up the birthdays of the people in the list!')
# print(birthdays)
# myname = input('Enter your name')
# age = input('Enter your age (YYYY/MM/DD)')
# birthdays[myname.capitalize()] = age
# name = input('Enter name')
# if name.capitalize() in birthdays.keys():
#     print(name, 'born', birthdays[name.capitalize()])
# else: print(f'Sorry, we don’t have the birthday information for {name.capitalize()}')
#

#4
# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }
#
#
# message = ''
# for i in items.items():
#     message += f' {i[0]}:{i[1]}'
# print(message)

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

result = []
for i in items.values():
    result.append(i['price'] * i['stock'])
print(sum(result))
