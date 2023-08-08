
//1
let h1 = document.querySelector("h1")
console.log(h1.textContent)

//2
document.querySelector("article").lastElementChild.remove()

//3

let h3 = document.querySelector("h3")
h3.addEventListener("click", hide)


//4
function hide() {
  h3.style.display = "none"
}


//5
function textb() {
  let allp = document.querySelectorAll("p")
  for(i=0;i<allp.length;i++) {
    allp[i].style.fontWeight = "bold"
  }
}


//6

h1.addEventListener("mouseover", randd)
function randd () {
  let random = Math.floor(Math.random() * 101)
  h1.style.fontSize = `${random}px`
}

//7 

let h2 = document.querySelector("h2")
h2.addEventListener("mouseover", fade)
function fade() {


  h2.classList.add("fade-out")

}
