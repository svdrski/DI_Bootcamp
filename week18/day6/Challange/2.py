# x = int(input('Enter the Number:'))
#
# delt = [i for i in range(1,x) if x % i == 0]
# result = True if sum(delt) == x else False
# print(result)

import  re
val = 'igieg geihgi geii gei'
x = re.search('geihgi', val)
print(x.group())