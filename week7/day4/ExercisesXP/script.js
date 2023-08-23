/////1
let sum = (a, b) => a * b
console.log(sum(2,2))

let sum2 = (a) => (b) => a * b
console.log(sum2(2)(3))



/////2
weight(5)
function weight (value) {
    console.log('grams: ' + value * 1000)
}

let ingrams = function (value) {
    console.log('grams: ' + value * 1000)
}
ingrams (10)

/// function declaration - you can call function before declaration.  function expression not 

let oneline = (a) => console.log(a * 1000)
oneline(20)


///////////3

let text = document.getElementById("ex3");

(function Fortune (number_of_children, partners_name, geographic_location, job_title) {
    text.innerHTML = `You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} kids.`;
})(20, 'Kuku', 'Alenby', 'Boss' )


////////////4

let navbar = document.getElementById('navbarNav');
let namea = 'Sasha';

(function (value, picture) {
let div = document.createElement('div')
div.style.display = "flex"
let p = document.createElement('p')
p.innerText = value
div.appendChild(p)
let photo = document.createElement('img')
photo.setAttribute ("src", picture)
photo.style.height = '40px'
div.appendChild(photo)
navbar.appendChild(div)
})(namea, 'https://biographe.ru/wp-content/uploads/2022/08/123123123-3.png' )



/////////////5


///part1
// let text3 = document.getElementById("ex5");

// function makeJuice (size) {
//     function addIngredients (ing1, ing2, ing3) {
//         text3.innerHTML = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}"`
//     }
//     addIngredients ('cola','fanta','sprite')
// }

// makeJuice ('medium')

///part2
let text3 = document.getElementById("ex5");
let ingredients = []
function makeJuice (size) {
    function addIngredients (ing1, ing2, ing3) {
      ingredients.push(ing1, ing2, ing3)
    }
    addIngredients ('cola','fanta','sprite')
    addIngredients ('water','juice','vodka')

    function displayJuice () {
        text3.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`
    }
    displayJuice()
}

makeJuice ('medium')
