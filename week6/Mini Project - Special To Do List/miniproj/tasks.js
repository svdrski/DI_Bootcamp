let Arrays = JSON.parse(localStorage.getItem('Array'))
console.log(Arrays)

let tasksarea = document.getElementById('tasksarea')
const currentDate = new Date();

Arrays.forEach((task) => {
let div = document.createElement('div')
div.innerHTML = `
<p> Name: ${task.name}
Start date: ${task.start_date}
Days left: ${task.end_date - currentDate }

</p>
`
tasksarea.appendChild(div)
})


console.log(currentDate)

