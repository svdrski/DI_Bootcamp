document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation")

let newLi = document.createElement("li")
let newtext = document.createTextNode("Logout")
newLi.append(newtext)

document.querySelector("ul").appendChild(newLi)

let first = document.querySelector("ul").firstElementChild.textContent
let last = document.querySelector("ul").lastElementChild.textContent
console.log(first, last)

document.querySelector("ul").append(first,last)