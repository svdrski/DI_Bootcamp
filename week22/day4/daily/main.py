#1
# def counter(str):
#     result = {}
#     str = str.split()
#     for i in str:
#         if i in result.keys():
#             result[i] += 1
#         else: result[i] = 1
#     print(result)
#
# counter('apple orange apple banana orange apple')



#2

def calc(str):
    result = []
    maximum = 1
    for i in str:
        if i in result:
            if len(result) > maximum:
                maximum = len(result)
                result = []
        else: result.append(i)
    return len(result)



print(calc('pwwkew'))