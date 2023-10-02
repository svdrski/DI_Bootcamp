const form = document.forms[0]
let authToken = ''
localStorage

form.addEventListener('submit', async (e)=> {
    e.preventDefault()
    const formData = new FormData(e.target)
    let request = await fetch('/login', {
        headers: {"Content-Type" : "application/json"},
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData))
    })
    if(request.ok) {
        request = await  request.json()
        localStorage.setItem('authToken', JSON.stringify(request))
        window.location.href = '/game'
    } else {
        request = await  request.json()
        document.getElementById('response').innerText = request
    }
})

