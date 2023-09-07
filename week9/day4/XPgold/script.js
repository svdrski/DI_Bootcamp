let data = new XMLHttpRequest()
data.open('get', 'https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&' )
data.responseType = 'json'
data.send()

data.onload = () => {
    let section = document.getElementById('container')
    let image = document.createElement('img')
    image.src = data.response.data.images.original.url
    section.appendChild(image)
}
