const tasks = [];
let input = document.getElementById("inpt")
let btn = document.getElementById("sbmt")
let list = document.querySelector(".listTasks")


let id = 0

function addTask(e) {
  e.preventDefault()
  if (input.value !== "") {
    
    let task = {
      task_id : id,
      text : input.value,
      done : false
    }
    tasks.push(task) 

    let newtask = document.createElement("div")
    newtask.innerHTML += `<span>${input.value}`
    addbtns(newtask)
    newtask.setAttribute("data-task-id", id)
    newtask.style.display = "flex"
    
    list.appendChild(newtask)
    id++
  }
}

function addbtns(value) {
  let close = document.createElement("span")
  close.innerHTML = `<i class="fa-solid  fa-circle-xmark" style="color: #d60000;" onclick="deleteTask(event)"></i> <input type="checkbox" id="check" onclick="doneTask(event)">    `
  value.insertBefore(close, value.firstChild)
}

function doneTask(e){
  let style = e.target.parentNode.nextElementSibling.style
  style.color = "red"
  style.textDecoration = "line-through"

  let arrayindex = e.target.parentNode.parentNode.getAttribute("data-task-id")
  tasks[arrayindex].done = true
}

function deleteTask(e){
  console.log(e.target.parentNode.parentNode)
  
  e.target.parentNode.parentNode.remove()

}
