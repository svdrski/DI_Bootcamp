#1
# list = [1,2,3,4,5,6]
# list.insert(3,55)
# print(list)

#2
# str = 'ffef fe e   e e efe ef '
# print(str.count(' '))

#3
# def count(text):
#     upp = 0
#     low = 0
#     for i in text:
#         if i.isupper():
#             upp +=1
#         else: low +=1
#
#     result = f'Upp is {upp}, low is {low}'
#
#     return  result
# print(count('FFFFr'))

#4
# def my_sum(arr):
#     res = 0
#     for i in arr: res += i
#     return res
# print(my_sum([1,5,4,2]))

#5
# def find_max(arr):
#     return max(arr)
# print(find_max([0,1,3,50]))

#6
# def factorial(i):
#     result = 1
#     for x in range(1, i + 1):
#         result = x * result
#     print(result)
# factorial(5)

#7
# def list_count(arr, value):
#     result = 0
#     for i in arr:
#         if i == value: result+=1
#     print(result)
# list_count(['a','a','t','o'],'a')

#8
# import math
#
# def norm(arr):
#     print(math.sqrt(sum([i ** 2 for i in arr])))
# norm([1,2,2])


#9
# def is_mono(arr):
#     inc = all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))
#     dec = all(arr[i] >= arr[i + 1] for i in range(len(arr) - 1))
#     return inc or dec
#
# print(is_mono([7,6,5,5,2,0]))
# print(is_mono([2,3,3,3]))
# print(is_mono([1,2,0,4]))

#10
# lists = ['feef', 'e', 'efefefef']
# def calc(arr):
#     return sorted(arr, key=len)[-1]
# print(calc(lists))

#11
# lists = [12,3,4,'4414','gewgewg',3,'g4']
# strs = []
# ints = []
# while len(lists):
#     value = lists.pop()
#     if type(value) == int :
#         ints.append(value)
#     elif type(value) == str:
#         strs.append(value)
#
# print(lists, strs, ints)

#12
# def is_palindrome(strs):
#     while len(strs) > 1:
#         if strs[0] == strs[-1]:
#             strs = strs[1:-1]
#         else:return  False
#     return True
#
# print(is_palindrome('radar'))
# print(is_palindrome('John'))

#13
# sentence = 'Do or do not there is no try'
# k=2
# def sum_over_k(sent, k):
#     result = 0
#     for i in  sent.split(' '):
#         if len(i) > k: result +=1
#     return result
#
# print(sum_over_k(sentence,k))

#14
# def dict_avg(dict):
#     return sum([i for i in dict.values()]) / len(dict)
# print(dict_avg({'a': 1,'b':2,'c':8,'d': 1}))


#15
# def common_div(*tpl):
#     result = []
#     for i in tpl:
#         for x in range(1, i + 1):
#             if i % x == 0: result.append(x)
#     return sorted(list(set([i for i in result if result.count(i) > 1])), key=int)
# print(common_div(10,20))

#16
# def is_prime(x):
#     for i in range(2, x):
#         if x % i == 0:
#             return False
#     return True
# print(is_prime(11))

#17
# def weird_print(arr):
#     result = []
#     for i, value in enumerate(arr):
#         if i % 2 == 0 and value % 2 == 0: result.append(value)
#     return  result
# print(weird_print([1,2,2,3,4,5]))

#18
# def type_count(**data):
#     result = {}
#     for i in data.values():
#         value = type(i).__name__
#         result[value] = result.get(value, 0) + 1
#     return  result
#
# print(type_count(a=1,b='string',c=1.0,d=True,e=False))

#19
# def splits(value, separator):
#     result = []
#     word = ''
#     for i in value:
#         if i != separator:
#             word += i
#         else: result.append(word)
#     result.append(word)
#     return  result
# print(splits('ffe/efe', '/'))

#20

def showPass(value):
    print('*' * len(value))

showPass('Hello')