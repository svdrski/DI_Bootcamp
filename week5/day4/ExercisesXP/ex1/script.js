setTimeout(function () {
  alert("Hello world")
} , 2000)

setTimeout(function () {
  let newp = document.createElement("p")
  newp.textContent = "Hello World"
  let divv = document.getElementById("container")
  divv.appendChild(newp)
} , 2000)


let divspam = setInterval(function () {
  let newp = document.createElement("p")
  newp.textContent = "Hello World"
  let divv = document.getElementById("container")
  divv.appendChild(newp)
  console.log(divv.childElementCount)
  //stoper 
if (divv.childElementCount === 5) {
  clearInterval ()
}
} , 2000)



let btn = document.getElementById("clear")
btn.addEventListener("click", clearInterval )

function clearInterval () {
  clearTimeout(divspam)
}

