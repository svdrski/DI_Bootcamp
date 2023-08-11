const element = document.getElementById('p');
const rect = element.getBoundingClientRect();


function OnDragStart(e) {
    console.log(rect.top, rect.left, rect.bottom, rect.right);
    const startX = e.clientX;
    e.target.addEventListener("drag", dragg)

    function dragg(e) {
    const deltaX = e.clientX - startX
    console.log(e.target.textContent)
    e.target.style.fontSize = deltaX +"px"
     }
     
e.dataTransfer.setData("mydiv", e.target.textContent)
}


function dragover (e) {
    e.preventDefault()
}

function Drop (e) {
e.preventDefault()
const text = e.dataTransfer.getData("mydiv")
console.log(text)
e.target.textContent = text
}