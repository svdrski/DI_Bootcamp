# my_dog = {
#   'name': 'Rufus',
#   'age': 4
# }
#
# items = my_dog.items()
# print(items)
#
#
# for key, value in items:
#   print(key, value)

# sample_dict = {
#   "class": {
#     "student": {
#       "name": "Mike",
#       "marks": {
#         "physics": 70,
#         "history": 80
#       }
#     }
#   }
# }
# del sample_dict['class']['student']['marks']['history']
# print(sample_dict)

#
# rick_dict = {
#     'first_name':'Rick',
#     'last_name':'Sanchez'
# }
#
# print(rick_dict.items())


# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"
#
# }
# del sample_dict["name"]
# del sample_dict['salary']
#
# print(sample_dict)

# my_books = {
#   "title": "Harry Potter",
#   "author": "JK Rowling",
# }
#
# for ket, value in my_books.items():
#   print(ket, value)

# print(list(range(1, 10, 2)))


# for item in enumerate('ABCD'):
#   print(item)
#
# for index, item in  enumerate('QWERT'):
#   print(index, 'iS', item)

# list1 = [1,2,3]
# list2 = ['a','b','c']
# list3 = [1.1, 2.2, 3.3, 4.4, 5.5]
#
# for item in zip(list1,list2,list3):
#   print(item)

# for i in range(1, 4):
#     print(i)
# else:
#     print('The for loop is over')
#
#
#

# for item in [1,2,3]:
#     if item == 2: pass
#     print(item)# to avoid the error
#
# print('Finish the script')


# my_number = '1234'
# my_list = []
#
#
#
# my_list = [i for i in my_number]
#
# print(my_list)
#
# list2 = [i for i in range(10)]
# print(list2)
#
#
# list3 =  [i * 2 for  i in range(1, 10)]
#
# print(list3)
#
#
# list4 = [i for  i in range(1,10) if i % 2 == 0]
#
# print(list4)
#
#
#
# list5 = [(i*j) for  i in [2,3,4] for j in [100,200,300]]
#
# print(list5)

#
# family_age = {'Lea': 12, 'Mark': 25, 'George': 50}
#
# new_year = 1
#
#
# newAge = {name: age + new_year for (name, age) in family_age.items()}
#
# print(newAge)



# def sayHello(message='ku', name='loh'):
#   print('message> ', message, "Name", name)
#
#
# sayHello('HLEEV', name='jj')

# def fullname(name, last):
#   result = name + last
#   return result.upper()
#
#
# print(fullname('Hleb', 'svid'))



# def name(first, last):
#   return (first.upper(), last.upper())
#
# f, l = name('Hleb', 'svi')
#
# print(f)
# print(l)


# def calculation(a, b):
#   return (f'minus {a - b}', f'plus {a + b}')
#
# a, b = calculation(10, 5)
# print(a)
# print(b)


# def my_f1():
#   print("Hello")
#
#
# def my_f2():
#   print("Word")
#
#
# def my_f3():
#   print("This is Rick!")
#
# list_of_functions = [my_f1, my_f2, my_f3]
#
# for i in  list_of_functions:
#   print(i())

# unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
# completed_models = []
#
# # Simulate printing each design until none are left.
# # Move each design to completed_models after printing.
#
# while len(unprinted_designs) != 0:
#     current_design = unprinted_designs.pop()
#
#     # Simulate creating a 3D print from the design.
#     print("Printing model: " + current_design)
#     completed_models.append(current_design)
#
# print(unprinted_designs)


# def hello(iten):
#   return iten * 2
#
# mylist = [1,2,3]
# print(mylist)
# list2 = list(map(hello, mylist))
# print(mylist, list2)


# basket = [1,2,3,4,5,6,7,8]
# a,b,c, * last, d = basket
#
# print(last)
# print(d)
#
# data = ['a', 'b', 'c', 'b', 'd', 'm', 'n','n']
#
# duplicates = list(set(i for i in data if data.count(i) > 1))
#
# print(duplicates)




# dict - создать обьект из переменнных
# user = {
#   'name': 'log'
# }
#
# print(user.get('age', 55))
#
#
# userss = dict(name='LOSHATA', age='333')
#
# print(userss)



# mydict = {i: i*2 for  i in [1,2,3]}
#
# print(mydict)


# data = {1,3,45,6}
#
# for i in  data:
#   print(i)

def hieven(arr):
  highest = 0
  for i in arr:
    if i % 2 == 0 and i > highest: highest = i
  return  highest

print(hieven([10,2,3,4,8,11]))