// Exercise 3

let shoppingList=[]

let box = document.getElementById("root")

let form = document.createElement("form")
let input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("id", "text")
form.appendChild(input)
let btn = document.createElement("button")
btn.innerText = "AddItem"
btn.setAttribute("onclick", "addItem(event)")

box.appendChild(form)
form.appendChild(btn)

function addItem (e) {
e.preventDefault()
let inpt = document.getElementById("text")
shoppingList.push(inpt.value)
console.log(shoppingList)
}

let cleacrbtn = document.createElement("button")
cleacrbtn.innerText = "ClearAll"
cleacrbtn.setAttribute("onclick", "clearAll()")
box.appendChild(cleacrbtn)

function clearAll() {
    shoppingList = []
    console.log(shoppingList)
}







// Exercise 2

// let form = document.getElementById("colorSelect")
// let btn = document.querySelector("input")

// btn.addEventListener("click", removecolor )

// function removecolor() {
// form.remove(form.selectedIndex)
// }




// Exercise 1

// let gen = document.getElementById("genres")
// let value = document.getElementById("value")
// gen.selectedIndex = 2

// gen.addEventListener("change", show)
// function show() {
//   value.textContent = gen.value
// }


