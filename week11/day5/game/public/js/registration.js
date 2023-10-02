const form = document.forms[0]

form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const formData = new FormData(e.target)
    let request = await fetch('/registration', {
        headers: {"Content-Type" : "application/json"},
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData))
    })
    
    request = await  request.json()
    document.getElementById('response').innerText = request
    
})