# li = [1,3,3,4,6,7]
# li.insert(1,34)
# print(li)
#
# print(li.count(3))
#
# a = ["b", "g", "a", "d", "f", "c", "h", "e"]
# b = [1, 2, 5, 8, 3]
# print(sorted(a))
# b.sort()
# print(b)
#
# #перевернуть лист
# print(a[:: -1])
# print(a[::])

# t = (1, 2, 3, 4, 5)
#
# print(max(t))
#
# a = {1, 2, 3, 4, 5}
# b = {2, 3, 6, 7, 5}
#
# d = a - b
# print(d)
#
#
#
# res = lambda value : value * 3 / 2 + 22
#
# print(res(3))
#
#
#
#
# minus = lambda a, b, c : a + b + c
#
# print(minus(1,2,3))
#
# myList = [10, 25, 17, 9, 30, -5]
#
# mylist2 = map(lambda n : n*2, myList)
#
#
# print(list(mylist2))
#
# list3 = filter(lambda n : n % 2 == 0, myList)
# print(list(list3))
#



#
# global
#
# nonlocal


# def fibonacci(index):
#     a = 0
#     b = 1
#     for i in range(index):
#         yield a
#         temp = a
#         a = b
#         b = temp + b
#     print(a, b)
#
# fibonacci(10)
#
# nan = filter(lambda )

def fib(num):
    a,b = 0, 1
    arr = [a,b]
    for _ in  range(num - 1):
        # temp = a
        # a = b
        # b = temp + a
        a,b = b, a + b
        arr.append(b)
    return  arr[-1]

print(fib(11))