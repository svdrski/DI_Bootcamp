let Arrays = JSON.parse(localStorage.getItem('Array'))
console.log(Arrays)

let tasksarea = document.getElementById('tasksarea')
const currentDate = new Date();

Arrays.forEach((task) => {
let div = document.createElement('div')
div.innerHTML = `
<p> Name: ${task.name}
Start date: ${task.start_date}
Days left: ${task.end_date - currentDate}
</p>
`
tasksarea.appendChild(div)
})


let newdate = new Date(Arrays[0].end_date)

console.log(currentDate)
console.log(newdate)

console.log(Math.floor(currentDate - newdate / (1000 * 60)))

// Arrays[0].start_date.getDay()

// console.log(currentDate)

// var today = Arrays[0].start_date
 
// var options = {  day: 'numeric' };
 
// var now = today.toLocaleString('en-US', options);
// console.log(now);

