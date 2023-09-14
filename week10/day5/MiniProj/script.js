let contentBlock = document.getElementById('contentarea')
let button = document.getElementById('find')
button.addEventListener('click', getInformation)

async function getInformation () {
    try {
        //loading animation
        contentBlock.innerHTML = `<i class="fa-solid load fa-circle-notch fa-spin"></i>`

        //get random number
        let random = Math.floor(Math.random() * 83 + 1)

        // get data from server
        let request = await  fetch(`https://www.swapi.tech/api/people/${random}`)
        request = await request.json()

        // Print all data with other function
        print(request.result.properties)

    } catch (error) {
        //show error on the page and console
        contentBlock.innerHTML = `<h1>ERROR</h1>`
        console.error('Oh NO ERRROR !!!!!!')
    }

}

//function to get planet name
async function getPlanet (value) {
    let home =  await fetch(value)
    home = await home.json()
    return home.result.properties.name
}


//Function to print data on the page
async function print (item) {
    contentBlock.innerHTML = `
    <h2>${item.name}</h2>
    <p>Height: ${item.height}</p>
    <p>Gender: ${item.gender}</p>
    <p>Birth year: ${item.birth_year}</p>
    <p>Home world: ${await getPlanet(item.homeworld)}</p>
    `
}
