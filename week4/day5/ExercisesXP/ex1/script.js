let myDiv = document.getElementById("container");
console.log(myDiv)

document.querySelector(".list").children[1].innerHTML = "Richard" 

document.getElementsByClassName("list")[1].children[1].remove()

let uls = document.querySelectorAll("ul")

for (i=0; i < uls.length; i++) {
uls[i].children[0].innerHTML = "Hleb"
}

let addcclas = document.getElementsByClassName("list")

for (let el of addcclas) {
  el.classList.add("student_list")
}

let uni = document.querySelector(".list")
uni.classList.add("university", "attendance")