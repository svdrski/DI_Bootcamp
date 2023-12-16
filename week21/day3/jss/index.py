# import json
#
# data = {
#     "firstName": "Jane",
#     "lastName": "Doe",
#     "hobbies": ["running", "sky diving", "singing"],
#     "age": 35,
#     "children": [
#         {
#             "firstName": "Alice",
#             "age": 6
#         },
#         {
#             "firstName": "Bob",
#             "age": 8
#         }
#     ]
# }
#
# #
# with open('file.json', 'w') as file:
#         json.dump(data, file)
#
#
# with open('file.json', 'r') as file:
#     family = json.load(file)
#
# print(family)
# print(json.dumps(family['children'], indent = 2, sort_keys=True))
# for i in family['children']:
#     i["favorite_color"] = 'Blue'
#
# print(family)
#
# with open('file.json', 'w') as file:
#     json.dump(family, file)


import requests


# response = requests.get("http://api.open-notify.org/iss-now.json")
# print(response.status_code)
# print(response.text)
# print(response.headers)
# print(response.json())


# req =  requests.get("http://api.open-notify.org/iss-pass.json", params={"lat": 31.771959, "lon": 35.217018})
# print(req.text)


# hh =  requests.get("http://api.open-notify.org/astros.json")
# print(hh.json())
# print(hh.request.url)
# print(hh.request.body)

# joke = requests.get('https://api.chucknorris.io/jokes/random')
# print(joke.json()['value'])

word = 'smile'
joke = requests.get('https://api.chucknorris.io/jokes/search?', params={"query": word})
print(joke.json()['result'][0]['value'])




