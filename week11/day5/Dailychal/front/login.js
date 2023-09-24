const form = document.forms[0]

form.addEventListener('submit', async(e)=> {
    e.preventDefault()
    console.log('sss')
    const formData = new FormData(form)
    const resp = await fetch('http://localhost:4444/login',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(Object.fromEntries(formData))
        }
    )
    if (resp.ok) {
        printmessage('Login complete');
        const key = await resp.json()
        showprof(key)
    } else {
        const message = await resp.json()
        printmessage(message);
    }

})

function printmessage(message) {
    document.getElementById('status').innerText = message
}

function printProfile(value) {
    document.getElementById('profile').innerHTML = `
    <p>Name: ${value.firstname}</p>
    <p>lastname: ${value.lastname}</p>
    <p>email: ${value.email}</p>
    <p>username: ${value.username}</p>
    `
}


async function showprof(key){
      const resp = await fetch('http://localhost:4444/profile', {
        method: 'GET',
        headers: {
            'Authorization': `${key}`,
            'Accept': 'application/json'}
    });
    if (resp.ok) {
        const message = await resp.json()
        printProfile(message)
    } else {
        const message = await resp.json()
        printmessage(message);
    }
}
