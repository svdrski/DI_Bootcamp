let form = document.getElementById('form')
let name = document.getElementById('name')
let description = document.getElementById('description')
let firstdate = document.getElementById('firstdate')
let seconddate = document.getElementById('seconddate')
let submit = document.getElementById('submit')

let array = JSON.parse(localStorage.getItem('Array')) || [];
submit.addEventListener('click', saver)
console.log(array)

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


const toggleButton = document.getElementById('toggleButton');
const dropdownList = document.getElementById('dropdownList');

// Добавляем обработчик события на кнопку
toggleButton.addEventListener('click', function () {
    // Переключаем видимость списка
    if (dropdownList.classList.contains('hidden')) {
        dropdownList.classList.remove('hidden');
        toggleButton.textContent = 'Скрыть список';
    } else {
        dropdownList.classList.add('hidden');
        toggleButton.textContent = 'Показать список';
    }
});
