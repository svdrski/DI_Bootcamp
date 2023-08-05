let myDiv = document.getElementsByTagName("div")[0]
myDiv.style.backgroundColor = "lightblue"
myDiv.style.padding = "15px"

let lii =  document.querySelectorAll("li")
lii[0].style.display = "none"
lii[1].style.border = "1px solid #000"

document.querySelector("body").style.fontSize = "44"

if (myDiv.style.backgroundColor === "lightblue") {
  alert(`Hello ${lii[0].innerHTML} and ${lii[1].innerHTML}`)
}