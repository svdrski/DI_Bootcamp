const contentBox = document.getElementById('content')
///EventListeners first two call function without parameters
document.getElementById('search').addEventListener('click', ()=>{getPokemon()})
document.getElementById('previous').addEventListener('click', ()=>{navigation()} )
document.getElementById('next').addEventListener('click', navigation)

let currentPokemon = Number

//Get Random
function getRandom(){
   return  currentPokemon = Math.floor(Math.random() * 600 + 1)
}


//Get pokemon
async function getPokemon (value) {
    let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${value? value : getRandom()}`)
    req = await req.json()
    console.log(req)
    print(req)
}

/// Print to page
function print (value) {
contentBox.innerHTML = `
<img class="img" src="${value.sprites.front_shiny}">
<h2>${value.species.name}</h2>
<p>Pokemon #${value.id}</p>
<p>Height: ${value.height}cm</p>
<p>Weight: ${value.weight}gr</p>
<p>Type: ${value.types[0].type.name}</p>
`
}


// Nav if call with parameter = next if without = previous
function navigation(next) {
    next ? currentPokemon += 1 : currentPokemon -= 1
    getPokemon (currentPokemon)
}
