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


// const divs = document.getElementsByTagName("div") //Возвращает все элементы с таким же тегом ( все дивы )

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

const ul = document.querySelector("ul")

const div = document.querySelector("div")
console.log(ul.innerHTML)


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




const input = document.querySelector("#muinput");



function addlistItem() {
  const newLi = document.createElement("li")
  // const newTextForli = document.createTextNode("New list item");
  // newLi.append(newTextForli)
  // ul.append(newLi)
  newLi.innerHTML = input.value;
  ul.append(newLi);
input.value = ""

  
  }


  function remove() {
    
  }