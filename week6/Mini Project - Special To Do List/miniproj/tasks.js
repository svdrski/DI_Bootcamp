
/// sorting by start date
let filtering = JSON.parse(localStorage.getItem('Array'))
filtering = filtering.sort((a,b) => {
   return  new Date(a.start_date) - new Date(b.start_date)
})
localStorage.setItem('Array', JSON.stringify(filtering))
 
//// form data
let form = document.getElementById('form')
let name = document.getElementById('name')
let description = document.getElementById('description')
let firstdate = document.getElementById('firstdate')
let seconddate = document.getElementById('seconddate')
let submit = document.getElementById('submit')

/// get data from local storage
let Arrays = JSON.parse(localStorage.getItem('Array'))

let tasksarea = document.getElementById('tasksarea')

// generetion of blocks for every record
Arrays.forEach((task, index) => {
let div = document.createElement('div')  //create div
div.setAttribute('id', index)
div.classList.add('block')  // add class block

// add event listener exclude checkbox and delete
div.addEventListener('click', function(event) {
(event.target.id !== 'checkbox1' && event.target.id !== 'delete'  && event.target.id !== 'edit')  && showdescription(this);
});

//formatting dates
const currentDate = new Date();
const startdate = new Date(task.start_date)  // day start
const enddate = new Date(task.end_date)  // stop date
const daysleft = Math.floor((enddate - currentDate) / (1000 * 60 * 60 * 24));  // how much days is left

// split the date
const day = startdate.getDate() + 1;
const month = startdate.getMonth() + 1;
const year = startdate.getFullYear();
const hours = startdate.getHours();
const minutes = startdate.getMinutes();

// html of block 
div.innerHTML = `
<div class="inline">
<input type="checkbox" id="checkbox1" name="option1" ${task.done ? 'checked' : ''} onclick="changestatus(event)">
<span class="descript"> Status</span>
<span id='status' class='status' style="background-Color:${task.done ? '#08ba00' : daysleft < 0 ? '#dbd900' : '#dc0000'}"></span>
</div>
<p class="descript">Name:</p>
<h3>${task.name}</h3>
<p class="descript mt10">Start date:</p>
<p class="date mb10"> ${day<10?'0':''}${day}-${month<10?'0':''}${month}-${year} ${hours}:${minutes<10?'0':''}${minutes}  </p>
<span class="descript mt10">Days left:</span> <span class="dleft">${daysleft}</span>
<p id='edit' onclick="edt(event)">edit</p>
<p id='delete' onclick="del(event)">delete</p>
<div class='description hidden'>
<hr>
<p class="descript mt10">Description</p>
<p>${task.description}</p>
</div>
`

tasksarea.appendChild(div) /// add this block to the page
})


//Show and hide description
function showdescription (value) {
const dDiv = value.querySelector('.description');
dDiv.classList.contains('hidden') ? dDiv.classList.remove('hidden') : dDiv.classList.add('hidden')
};


// change status
function changestatus(event) {
let Arrays2 = JSON.parse(localStorage.getItem('Array')) // get array from local storage
Arrays2[event.target.closest('div.block').id].done = event.target.checked   // change done status to actual
event.target.nextElementSibling.nextElementSibling.style.backgroundColor = Arrays2[event.target.closest('div.block').id].done ? '#08ba00' : '#dc0000'  // change color of status
localStorage.setItem('Array', JSON.stringify(Arrays2))  // uploading updates to local storage
}
console.log(JSON.parse(localStorage.getItem('Array')))


/// delete record
function del (event) {
    let x = JSON.parse(localStorage.getItem('Array'))
    const confirmation = confirm("Are you sure ?");
    if (confirmation) {
        x.splice(event.target.parentElement.id, 1);
        localStorage.setItem('Array', JSON.stringify(x))
        event.target.parentElement.remove()
    } else {
        alert("Ok");
    }
}



/// edit record
function edt (event) {
    form.classList.remove('hidden')
    tasksarea.classList.add('hidden')
    let x = JSON.parse(localStorage.getItem('Array'))
    let idtoedit = [event.target.parentElement.id]

    submit.addEventListener('click', edit)
  function edit (){
    
    x[idtoedit] = {
        name: name.value,
        description: description.value,
        start_date: firstdate.value,
        end_date: seconddate.value
    }
    localStorage.setItem('Array', JSON.stringify(x))
    tasksarea.classList.remove('hidden')
}
}


