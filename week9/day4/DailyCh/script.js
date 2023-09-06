
let container = document.getElementById('container')
document.forms[0].addEventListener('submit', function () {
    event.preventDefault()
    search(this.elements.search.value)
})

function search (value) {
    let data = new XMLHttpRequest()
    data.open('get', `https://api.giphy.com/v1/gifs/random?tag=${value}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&`)
    data.responseType = 'json'
    data.send()
    data.onload = () => {
        if(data.status === 200) {
            console.log(Object.entries(data.response))
            render (data.response)
        } else  {
            console.log('fail')
        }
    }
    let render = (value) =>{
        let block = document.createElement('div')
        block.classList.add('element')
        block.innerHTML =
           `<img src=${value.data.images.original.url} style="width: 200px; height: 200px;">
            <button style="display: block" onclick="deletes(event)">delete</button>`

        container.appendChild(block)
        console.log(value.data.images.original.url)
    }
}
//// Delete one
function deletes(event) {
event.target.parentElement.remove()
}

/// Delete all

function deleteAll(){
    container.innerHTML = ''
}




