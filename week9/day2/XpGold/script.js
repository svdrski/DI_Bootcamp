let form = document.forms[0]

form.addEventListener('submit', function (event){
    event.preventDefault()
    let message = `Name: ${event.target.elements.name.value},     Last name: ${event.target.elements.lastname.value}`
    localStorage.setItem('StorageData', JSON.stringify(message))
     // localStorage.setItem('StorageData', message)
})