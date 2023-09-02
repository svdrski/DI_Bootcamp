let form = document.getElementById('form')
let name = document.getElementById('name')
let description = document.getElementById('description')
let firstdate = document.getElementById('firstdate')
let seconddate = document.getElementById('seconddate')
let submit = document.getElementById('submit')

let array = JSON.parse(localStorage.getItem('Array')) || [];   // get array from local storage, if empty - create new
submit.addEventListener('click', saver) 
console.log(array)


//function that push data from form to local storage
function saver (event) {
    event.preventDefault()
    let data = {
        name: name.value,
        description: description.value,
        start_date: firstdate.value,
        end_date: seconddate.value,
        done: false
    }
    console.log(data)
    array.push(data)
    localStorage.setItem('Array', JSON.stringify(array))
    console.log(JSON.parse(localStorage.getItem('Array')))
    window.location.href = 'tasks.html';
}

console.log(JSON.parse(localStorage.getItem('Array')))


