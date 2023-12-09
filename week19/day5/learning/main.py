# somelist = ['a','b', 'c', 'b', 'd', 'm', 'n', 'n']
#
# print(set(i for i in somelist if somelist.count(i) > 1))
#
# result = []
# for i in somelist:
#     if  somelist.count(i)> 1 and i not in result:
#         result.append(i)
# print(result)

picture = [
  [0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0],
  [1,1,1,1,1,1,1],
  [0,0,0,1,0,0,0],
  [0,0,0,1,0,0,0]
]

for row in picture:
    message = ''
    for i in row:
        symbol = ' ' if i == 0 else "*"
        message += symbol
    print(message)