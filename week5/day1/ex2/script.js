function handleClick() {
    // console.log("button was clicked")

    const div = document.getElementById("innerdiv")
    const button = document.createElement("button")
    button.textContent = "clickme"
    div.append(button)

    button.addEventListener("click", function(event){
        console.log(event.target)
    })
}

function handleInput(e){
    console.log(e.target.value, e.target.name)
}

function news(s) {
    console.log("ffff")
}

function handleOver(e) {
    e.target.style.background = "red"
}




 // e.target элемент вызванный событием