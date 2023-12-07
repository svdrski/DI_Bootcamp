
import random

while True:
    value = input('Enter value')
    if len(value) < 10: print('string not long enough');
    elif len(value) > 10: print('string too long');
    else:
        print('perfect string')
        print(value[0], value[-1])
        for i, item in enumerate(value):
            print(value[0: i+ 1])
        lv = list(value)
        random.shuffle(lv)
        print(''.join(lv))
        break