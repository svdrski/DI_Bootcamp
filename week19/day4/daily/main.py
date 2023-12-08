def calc():
    return 5 / 0

try:
    calc()
except ZeroDivisionError:
    print('ZeroDivisionError')

