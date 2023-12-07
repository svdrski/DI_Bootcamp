#1
# word = input('Enter word')
# result = {}
# for i, item in enumerate(word):
#     if item in result.keys():
#         result[item].append(i)
#     else:
#          result[item] = [i]
# print(result)

#2

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = 100

result = []
for item in items_purchase.items():
     value = int(item[1].replace('$' , '').replace(',', ''))
     if wallet - value >= 0:
         wallet -= value
         result.append(item[0])
print(sorted(result))