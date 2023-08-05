const myDiv = document.querySelector("div");
const Mydiv2 = document.getElementsByTagName("div")
const myDiv3 = document.getElementById("n1")

const myUl = document.querySelector("ul")
const myUl2 = document.getElementsByTagName("ul")

const secLi = myUl.children[1]
const secLi2 = myUl.lastElementChild
const secLi3 = document.querySelector("ul").lastElementChild.innerHTML



console.log(myDiv)
console.log(Mydiv2)
console.log(myDiv3)

console.log(myUl)
console.log(myUl2)


console.log(secLi)
console.log(secLi2.innerHTML)
console.log(secLi3)


let ul = document.querySelector("ul")
// let ul = document.getElementsByTagName("ul")[0]



function deletea(){
  // myUl.remove() // удалить все
  myUl.removeChild(myUl.children[0]) // удалить первый элемент
}


function addnewli () {
  const newli = document.createElement("li")
  // const newtextfli = document.createTextNode("New text")
  // newli.append(newtextfli)
  newli.innerHTML = "nonono"
  ul.append(newli)
}



let backh1 = document.getElementById("h11")

function chanbcolor(){
  backh1.style.background = "#fff"
}



// function addlistItem() {
// const newLi = document.createElement("li")
// // const newTextForli = document.createTextNode("New list item");
// // newLi.append(newTextForli)
// // ul.append(newLi)
// newLi.innerHTML = "New text";
// ul.append(newLi);

// }




let divcont = document.querySelector("#container")
let divcont2 = document.getElementById("container")

console.log(divcont.innerHTML)
console.log(divcont2.innerHTML)

let ulcont = document.getElementsByClassName("list")

console.log(ulcont[0].children[0].innerHTML)  /// перебор и вывод всех значений

for (i=0; i < ulcont.length; i++) {
  let child = ulcont[i].children
  for (a=0; a < child.length -1; a++) {  // - 1 только первые
    console.log(child[a].innerHTML)
  }
}


let ulcont2 = document.querySelectorAll(".list")

console.log(ulcont2[0].children[0].innerHTML, ulcont2[0].children[1].innerHTML, ulcont2[1].children[0].innerHTML, ulcont2[1].children[1].innerHTML)



let neeew = document.getElementById("elem") 

console.log(neeew.getAttribute("about"))

neeew.setAttribute("style", "color:blue")   /// добавить в отрибут



// перебор всех атрибутов и их значений 

let ex1 = document.querySelector("#dI")

console.log(ex1.getAttribute("href"))

let atributes = ex1.getAttributeNames()

for ( let atributex of atributes) {
  let attributevalue = ex1.getAttribute(atributex)
  console.log(atributex + " " + attributevalue)
}


let elems = document.getElementById("elem");

elems.style.background = "red";
elems.style.height = "500px"

elems.className = "news" /// Переписать класс
elems.classList.add("ffff") // Добавить новый класс в список
elems.classList.remove("ffff") // удалить класс
elems.classList.add("hoho", "lala") //  Добавить несколько классов
elems.classList.remove("hoho", "lala")  // Удалить несколько классов
elems.classList.replace("news", "stars") // Заменить класс
console.log(elems.classList.contains("stars")) // bool проверяет есть ли класс
elems.classList.toggle("starss") //добавляет если такого класса нет и удаляет если есть
elems.classList.toggle("starss", true) // Условие () (true/false ) Если второй параметр равен true, то класс будет добавлен к элементу, если он еще не существует. Если второй параметр равен false, то класс будет удален, если он уже существует.



let exe2 = document.getElementById("text")
exe2.style.background = "red";
exe2.style.fontSize = "22px"
exe2.style.fontWeight = "600"


















// const myDiv = document.querySelector("div")
// const myDiv = document.querySelector(".classdiv") // Возвращает только первый класс
// const myDiv = document.querySelectorAll(".classdiv") // Возвращает все
// const myDiv = document.querySelector("#id") // Возвращает id

// const myDiv = document.querySelectorAll(".classdiv") // Возвращает все


// console.log(myDiv)



// const parentDiv = document.getElementById("parent")

// console.log(parentDiv)

// const classDiv = document.getElementsByClassName("classdiv") // возвразает все элементы с таким же классом

// console.log(classDiv)

// const divs = document.getElementsByTagName("div") //Возвращает все элементы с таким же тегом ( все дивы ) в виде множества

// console.log(divs)



// const neaw = document.getElementById("id1");
// const neaw = document.querySelector("div")
//  const neaw = document.getElementsByTagName("div")

// console.log(neaw)


// let neaw2 = document.getElementsByClassName("ulclass")

// console.log(neaw2)

// console.log(neaw2[0].lastElementChild)  


// const neaw = document.getElementsByTagName("ul")[0].firstElementChild

// console.log(neaw)


// const ul1 = document.getElementsByTagName("ul")
// console.log(ul1[0])


// const ul = document.querySelector("ul")
// console.log(ul.children[1])
// const secondChildElement = ul.querySelector(':nth-child(2)')
// console.log(secondChildElement)

// Замена html по нажатию кнопки 

// const ul = document.querySelector("ul")

// const div = document.querySelector("div")
// console.log(ul.innerHTML)


// function changeHtml() {

//   div.innerHTML = "Fruits"
//   ul.innerHTML = `
//   <li> THis is a new list item </li>
//   <li> THis is a new list item </li>
//   <li> THis is a new list item </li>
//   `
// }



// function addlistItem() {
// const newLi = document.createElement("li")
// // const newTextForli = document.createTextNode("New list item");
// // newLi.append(newTextForli)
// // ul.append(newLi)
// newLi.innerHTML = "New text";
// ul.append(newLi);

// }




// const input = document.querySelector("#muinput");



// function addlistItem() {
//   const newLi = document.createElement("li")
//   // const newTextForli = document.createTextNode("New list item");
//   // newLi.append(newTextForli)
//   // ul.append(newLi)
//   newLi.innerHTML = input.value;
//   ul.append(newLi);
// input.value = ""

  
//   }


//   function remove() {
    
//   }