const form = document.forms[0]
console.log('ss')

form.addEventListener('submit', async (e)=> {
    e.preventDefault()
        const formData = new FormData(form)
       const response = await  fetch('http://localhost:4444/register', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            printmessage('Registration complete');
        } else {
            const message = await response.json()
            printmessage(message);
        }

    })



function printmessage(message) {
document.getElementById('status').innerText = message
}