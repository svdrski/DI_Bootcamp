//1
let form = document.forms[0]
console.log(form)

//2
let fid = document.getElementById("fname")
let sid = document.getElementById("lname")
let tid = document.getElementById("submit")

console.log(fid,sid,tid)

//3
let fid1 = document.getElementsByName("firstname")
let fid2 = document.getElementsByName("lastname")
let fid3 = document.getElementsByName("submit")
console.log(fid1,fid2,fid3)

//4

form.addEventListener("submit", funcc )

function funcc (event) {
  event.preventDefault()
  if ((sid.value && fid.value ) !== "") {
    let ul = document.querySelector(".usersAnswer")
    let newli = document.createElement("li")
    let newli2 = document.createElement("li")
    newli.textContent = fid.value
    newli2.textContent = sid.value
    ul.append(newli)
    ul.append(newli2)
  }
}