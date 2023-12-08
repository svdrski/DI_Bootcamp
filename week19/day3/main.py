# try:
#     print('x')
# except ValueError:
#     print('Valuerr')
#
#
# def func(a, *args, **kwargs):
#     print(a, args, kwargs)
#
# func('3r25', 4,5,6,7,7,7, rrr='rere', bfff=333)
#
# func(2,4,5,7,7,5)

# def check_keywordedarguments(**kwargs):
#     for key, value in kwargs.items():
#         print(key,":",value)
#
# check_keywordedarguments(name="Sarah", age=24, fsaf='33')


# def check(a, b, c):
#     print(a, b, c)
#
# a = [1,2,3]
# check(*a)
#
# a = {'a':'Sarah', 'b':24, 'c': 180}
# check(**a)

# def upper_string(s):
#     return s.upper()
#
# fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
# map_object = map(upper_string, fruit)
#
# print(list(map_object))
#
# k3 = map(lambda x: x.lower(), fruit)
#
# def filt(a):
#     return a[0]== 'A'
#
# k4= filter(filt, fruit)
#
# print(list(k4), 'KFKFKFK')
#
#
# k5 = filter(lambda a: a[0] == 'B', fruit)
#
# print(list(k5))
#
#
# print(list(k3))
#

# from functools import reduce
#
# def sum_numbers(first, second):
#     return first+second
#
# my_list = [1, 3, 5, 7]
# reduced_list = reduce(sum_numbers, my_list)
#
# print(reduced_list)
#
#
#
# people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
#
# people2 = filter(lambda x: len(x)<= 4, people)
# people3 = map(lambda x: f'Hello {x}', people2)
#
# print(list(people3))
#

# for i in people2:
#     print('Hello', i)
#
#
# print(list(people3))

# try:
#     print(1/0)
# except ZeroDivisionError:
#     print('ZERo')
# my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
#
# total = 0
# for i in my_list:
#     try:
#         total +=i
#     except:
#         pass
#
# print(total)
#
#
# raise Exception('FEFFEEF')


def zalupa(a):
    '''
    Info
    '''
    print(a)

print(zalupa.__doc__)

zalupa()