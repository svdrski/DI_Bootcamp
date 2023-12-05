#1
# number = int(input('Enter number'))
# length = int(input('Enter length'))
#
# result = list(range(number, number * length +1, number))
#
# print(result)


#2

word = input('Enter word')
result = ''
for i, letter in enumerate(word):
    if i < len(word) - 1 and letter == word[i + 1]:
        continue
    else: result += letter
print(result)