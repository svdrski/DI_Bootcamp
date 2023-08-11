

let color = "none";
let click = false;

let colorsarr = document.querySelectorAll("#sidebar > *")


let bod = document.body


let blocks = document.querySelectorAll("#main > *")
let main = document.getElementById("main")


let btn = document.querySelector("button")
 btn.addEventListener("click", function(){
  for (a of blocks) {
    a.style.backgroundColor = "white"
  }} )

for ( x of colorsarr) {
  x.addEventListener("click", function(event) {
    color = event.target.style.backgroundColor;
    console.log(color)
  })}


for (a of blocks) {
  a.addEventListener("mousedown", function(event){
   if (click) event.target.style.background = color
  })
  a.addEventListener("mouseover", function(event){
    if (click)  event.target.style.background = color
  })
}

bod.addEventListener("mousedown",function(){
click = true
})

bod.addEventListener("mouseup", function() {
  click = false
})



