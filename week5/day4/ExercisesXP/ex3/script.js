function start(e) {
  e.dataTransfer.setData("box", e.target.id)
}

function drag(e) {
  e.preventDefault()
}

function drop (e) {
  e.preventDefault()
  let id = e.dataTransfer.getData("box")
  let box = document.getElementById(id)
  e.target.appendChild(box)
}