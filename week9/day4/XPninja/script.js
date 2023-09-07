
let container = document.getElementById('container')
document.forms[0].addEventListener('submit', function () {
    event.preventDefault()
    search(this.elements.search.value)
})

/// to not repeat
let randomoffset = 0;

function search (searchvalue) {
    let getdata = new XMLHttpRequest()
    getdata.open('get', `https://api.giphy.com/v1/gifs/search?q=${searchvalue}&limit=50&offset=${randomoffset}&rating=R&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&`)
    getdata.responseType = 'json'
    getdata.send()
    getdata.onload = () => {
       let imagesArray =  Object.entries(getdata.response.data)
        render(imagesArray)
        randomoffset += 50
    }
}

function render (value) {
    let links = value.map(value => value[1].images.original.url)
    links.forEach(value => {
        let image = document.createElement('img')
        image.classList.add('gifstyle')
        image.src = value
        container.appendChild(image)
    })
}


function deleteAll(){
    container.innerHTML = ''
}
