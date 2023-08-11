let container = document.getElementById("container")
container.style.display = "flex"
let button = document.createElement("div")
button.style.height = "60px"
button.style.width = "60px"
button.style.background = "grey"
button.style.color = "#fff"
button.style.textAlign ="center"
button.textContent = "ADD"
button.setAttribute("id", "btn")
container.appendChild(button)

btn.addEventListener("click", createblock)

function createblock() {
    let block = document.createElement("div")
    block.style.height = "60px"
    block.style.width = "60px"
    block.style.backgroundColor = generateColor()
    block.setAttribute("class", "block")
    container.appendChild(block)
}

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }