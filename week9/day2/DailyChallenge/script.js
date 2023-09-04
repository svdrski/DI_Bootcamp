let form = document.forms[0]

form.addEventListener('submit', function (e){
    event.preventDefault()
    let data = JSON.stringify({
        [event.target.elements.name.name]: event.target.elements.name.value,
        [event.target.elements.lastname.name]: event.target.elements.lastname.value
    })

    let block = document.createElement('p')
    block.textContent = data
    document.body.appendChild(block)
})