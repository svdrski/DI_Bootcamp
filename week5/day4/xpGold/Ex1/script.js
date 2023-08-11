let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let container = document.getElementById("container")
container.style.display = "flex"
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {


for (let i of alphabet) {
let box = document.createElement("div")
box.style.width = "30px"
box.style.height = "30px"
box.style.border = "1px solid"
box.textContent = i
box.setAttribute("draggable", "true")
box.addEventListener("dragstart", dragstart)
box.addEventListener("dragover", dragover)
box.addEventListener("drop", Drop)
container.appendChild(box)
}
})

let transfer = "a"

function dragstart (e) {
    e.dataTransfer.setData("mydiv", e.target.textContent)
    e.target.setAttribute("class", "transfer")

}

function dragover (e) {
    e.preventDefault()
    transfer = e.dataTransfer.getData("mydiv")
}

function Drop (e) {
e.preventDefault()
const text = e.dataTransfer.getData("mydiv")
transfer = e.target.textContent
change()
e.target.textContent = text

}

function change() {
 let first = document.getElementsByClassName("transfer")[0]
 first.textContent = transfer
 first.removeAttribute("class")
}