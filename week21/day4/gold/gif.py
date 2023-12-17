import requests
# searchWord ='Cow'
# data = requests.get(f'https://api.giphy.com/v1/gifs/search?q={searchWord}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', params={'limit': 10})
# if data.status_code == 200:
#     print(data.json())
#     print(len(data.json()['data']))




def search():
    word = input('Enter word')
    data = requests.get(
        f'https://api.giphy.com/v1/gifs/search?q={word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
        params={'limit': 1})
    if data.status_code == 200:
        print(data.json())
    else: print('couldn’t find the requested')

search()

