
let box = document.getElementById("main")
let color = "none";
let click = false;
let colorsarr = document.querySelectorAll("#sidebar > *")
let bod = document.body
let main = document.getElementById("main")


function createGrid() {
  for (let i = 0; i < 1620; i++) {
      let div = document.createElement("div");
      div.style.backgroundColor = "white";
      main.appendChild(div);
  }
}   
createGrid() 
let blocks = document.querySelectorAll("#main > *")


for ( x of colorsarr) {
  x.addEventListener("click", function(event) {
    color = event.target.style.backgroundColor;
    console.log(color)
  })}


function addEventListenersToCells() {
  for (let cell of blocks) {
      cell.addEventListener("mousedown", setColor);
      cell.addEventListener("mouseover", setColorOver);
      cell.addEventListener("mouseup", stopColor)
  }
}
addEventListenersToCells()


function setColor() {
click = true
}

function setColorOver(event) {
  if (click === true) {
    event.target.style.background = color
  }}

function stopColor(event) {
click = false
}





