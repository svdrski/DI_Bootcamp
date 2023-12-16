# f = open('secrets.txt')
# secret_data = f.read()
# print(secret_data)
#
# s = open('secrets.txt', 'a+')
#
# s.write('\nThis is text being appended to test.txt')
#
# print(secret_data)
#
# try:
#    f = open("secrets.txt",encoding = 'utf-8')
#    print(f.read())
# finally:
#    f.close()
# for line in open('https://www.practicepython.org/assets/nameslist.txt'):
#     print(line)


# with open('nameslist.txt', 'r') as file:
#     for line in file:
#         print(line)


# with open('nameslist.txt', 'r') as file:
#     print(file.readlines()[4])
#
# with open('nameslist.txt', 'r') as file:
#     print(file.read(5))
#
# with open('nameslist.txt', 'r') as file:
#     lines = file.readlines()
#     lines_as_list = [line.strip() for line in lines]
#     print(lines_as_list)
#
# with open('nameslist.txt', 'r') as file:
#     data = file.read()
#     Darth = data.count('Darth')
#     Luke = data.count('Luke')
#     Lea = data.count('Lea')
#     print(Darth, Luke, Lea)
#
# # with open('nameslist.txt', 'a') as file:
# #     file.write('\nHleb Svidzerski')
#
#
# with open('nameslist.txt', 'r') as file:
#     data = file.read()
#     newData = data.replace('Luke', 'Luke SkyWalker')
#
# with open('nameslist.txt', 'w') as file:
#     file.write(newData)
#


import json


my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

with open('my_file.json', 'w') as file:
    json.dump(my_family, file)

print(json.dumps(my_family, indent = 2, sort_keys=True))




with open('my_file.json', 'r') as values:
    data = json.load(values)
    print(data)