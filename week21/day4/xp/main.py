#1
# import random

# def get_words_from_file():
#     with open('sowpods.txt', 'r') as file:
#         data = [i.strip() for i in file.readlines()]
#     return data
#
# def get_random_sentence(len):
#     words = get_words_from_file()
#     result = ''
#     for i in range(len):
#         result += random.choice(words).lower() + ' '
#     print(result)
#
#
# def main():
#     print('Welcome to random sentence generator')
#     length = int(input('How long you want the sentence to be ? (2 - 20)'))
#     if not 2 < length < 20:  raise ValueError('Wrong value')
#     get_random_sentence(length)
#
# main()



import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

value = json.loads(sampleJson)
print(value['company']['employee']['payable']['salary'])
value['company']['employee']['birth_date'] = '01.01,1990'
print(value)

with open('data.json', 'w') as file:
    json.dump(value, file)


