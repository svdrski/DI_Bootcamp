rows = 3

for i in range(1, rows + 1):
    message = ''
    for b in range(0, rows - i):
        message += ' '
    for x in range(0, 2 * i - 1 ):
        message += '*'
    print(message)


val = 5
for i in range(val + 1):
    message = ''
    for b in range(val - i):
        message+=' '
    for x in range(i):
        message +='*'
    print(message)


val = 5


for i in range(val + 1):
    print('*' * i + ' ' * (val - i))
for i in range(val + 1):
    print(' ' * i + '*' * (val - i))




my_list = [2, 24, 12, 354, 233] # list
for i in range(len(my_list) - 1):   # loop in len -1 = 4
    minimum = i # variable
    for j in range( i + 1, len(my_list)): #second loop between next value after i and all list
        if(my_list[j] < my_list[minimum]):  #if cur value in list < smallest
            minimum = j #set cur as smallest
            if(minimum != i): #if min not same with first loop
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]  # change places if next value bigger then current
print(my_list)

#sorting