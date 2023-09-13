let form = document.forms[0]
form.addEventListener('submit', formdata)

//get data from form and call getsunrise with this data
function formdata () {
    event.preventDefault()
    getsunrise(Object.fromEntries(new FormData(event.target)))
}

// function to get data and push it to the page
async function getsunrise (data) {
    let firstAddeess = await fetch(`https://api.sunrise-sunset.org/json?lat=${data.first_latitude}&lng=${data.first_longitude}`)
    let secondAddress = await fetch(`https://api.sunrise-sunset.org/json?lat=${data.second_latitude}&lng=${data.second_longitude}`)
    try {
        // throw Error('bababa')
        let resp = await Promise.all([firstAddeess,secondAddress])
        for (const item of resp) {
            const newItem = await item.json()
            //DOM
            let content = document.createElement('p')
            content.innerHTML = newItem.results.sunrise
            document.getElementById('response').appendChild(content)

        }
    } catch (error) {
        console.error('There is error', error)
    }
}
