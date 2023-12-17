def gen(num):
    for i in range(num):
        yield i*2

# for i in gen(29):
#     print(i)

a = gen(10)

next(a)
next(a)

print(next(a))