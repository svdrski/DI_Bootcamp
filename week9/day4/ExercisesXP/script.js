// Exercise1
let ex1 = new XMLHttpRequest()
ex1.open('get', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=r&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
ex1.send()
ex1.onload = () => console.log(JSON.parse(ex1.response))


// Exercise2
let ex2 = new XMLHttpRequest()
ex2.open('get', 'https://api.giphy.com/v1/gifs/search?q=hilarious&limit=10&offset=2&rating=r&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
ex2.responseType = 'json'
ex2.send()
ex2.onload = () => console.log(ex2.response)

