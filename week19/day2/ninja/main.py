#1
def box_printer(*list):
    longest = len(max(list, key=len)) + 6
    print('*' * longest)
    for i in list:
        print('* ', i, ' ' * (longest - len(i) -6 ), '*')
    print('*' * longest)


box_printer("Hello", "World", "reallylongword",  "in", "a", "frame")


# def insertion_sort(alist):
#    for index in range(1,len(alist)):
#
#      currentvalue = alist[index]
#      position = index
#
#      while position>0 and alist[position-1]>currentvalue:
#          alist[position]=alist[position-1]
#          position = position-1
#
#      alist[position]=currentvalue

def insertion_sort(list):
    for i in range(1, len(list)):

        while list[i - 1] > curvalue:
            list[i] = list[i - 1]


alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

## sorting algorithm
