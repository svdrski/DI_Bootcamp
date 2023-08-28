let form = document.getElementById('form')
let name = document.getElementById('name')
let description = document.getElementById('description')
let firstdate = document.getElementById('firstdate')
let seconddate = document.getElementById('seconddate')
let submit = document.getElementById('submit')

let array = JSON.parse(localStorage.getItem('array')) || [];
submit.addEventListener('click', saver)

function saver (event) {
    event.preventDefault()
    let data = {
        name: name.value,
        description: description.value,
        start_date: firstdate.value,
        end_date: seconddate.value,
        done: false
    }
    // const storageArray = JSON.parse(localStorage.getItem('Array'))
    array.push(data)
    localStorage.setItem('Array', JSON.stringify(array))
    console.log(JSON.parse(localStorage.getItem('Array')))
}

console.log(JSON.parse(localStorage.getItem('Array')))
