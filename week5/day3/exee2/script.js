function OnDragStart(e) {
    console.log("start")
    e.dataTransfer.setData("mydiv", e.target.id)
}

function OnDragEnd(e) {
    console.log("end")
    
}

function onDragOver(e){
    e.preventDefault()
    console.log("over")

}

function Ondrop(e){
e.preventDefault()

const id = e.dataTransfer.getData("mydiv")
console.log(id)

const pinksq = document.getElementById(id)

e.target.appendChild(pinksq)

console.log("drop")
}