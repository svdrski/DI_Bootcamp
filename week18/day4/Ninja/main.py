#1
# import math
#
# inpt = input(('Enter values C,D,H: '))
#
# inpt = list(inpt.split(','))
# for i, value in enumerate(inpt):
#     inpt[i] = int(value)
#
# result = []
# for D in inpt:
#   result.append(int(math.sqrt((2 * 50 * D) / 30)))
#
# print(result)

#2

# lists = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7, 7]
#
# stringRes = ','.join(map(str, lists))
# print(stringRes)
# print(sorted(lists, reverse=list))
# print(sum(lists))
# #3
# print([lists[0], lists[-1]])
# #4 //filter
# print([i for i in lists if i > 50])
# #5
# print([i for i in lists if i < 10])
# #6
# print([i ** 2 for i in lists])
#
# #7
# print(set(lists), len(set(lists)))
#
# #8
# print(int(sum(lists) / len(lists)))
#
# #9
# print(max(lists))
#
# #10
# print(min(lists))
#
# #11
# sum = 0
# largest = int
# small = int
#
# for i in lists:
#     sum += i
# print('Sum', sum)
#
# for i in lists:
#     if largest == int: largest = i
#     if i > largest: largest = i
# print('Largerst', largest)
#
# for i in lists:
#     if largest == int: largest = i
#     if i < largest: largest = i
# print('Smallest', largest)
#
# #12
# variable = []
# # for i in range(10):
# #     int = input('Enter number')
# #     variable.append(int)
# # print(variable)
#
# import  random
#
# #13
# for i in range(10):
#     value = random.randint(-100, 100)
#     variable.append(value)
# print(variable)
#
#
# #14
# rangeval = random.randint(50, 100)
# for i in range(rangeval):
#     value = random.randint(-100, 100)
#     variable.append(value)
# print(variable)






#
# #3
#
# sent = 'In recent years, advancements in artificial intelligence have revolutionized various industries. Machine learning algorithms, a subset of AI, have proven to be particularly powerful in tasks such as image recognition and natural language processing. The ability of AI systems to analyze vast amounts of data and draw meaningful insights has led to improved decision-making processes.'
# sents = sent.split('.')
# words = sent.split()
# uniq = set(words)
# spaces = sent.replace(' ', '')
#
#
# wordsquant = []
# for item in sents:
#     res = item.split()
#     wordsquant.append(len(res))
# avg = sum(wordsquant) / len(wordsquant)
#
# #non uniq
#
# quant = 0
# uniq_words = set()
# for i in words:
#     if i in uniq_words:
#         quant +=1
#     else:
#         uniq_words.add(i)
#
#
#
# print(f'''
# Length: {len(sent)}
# Sentenses: {len(sents)}
# Words: {len(words)}
# Uniq: {len(uniq)}
# No spaces: {len(spaces)}
# average amount of words per sentence: {int(avg)}
# non-unique words: {quant}
# ''')


#4

value = input('Enter: ')
value = value.split()
for i in  value:
    res = [x for  x in value if x == i]
    print(i, len(res))
