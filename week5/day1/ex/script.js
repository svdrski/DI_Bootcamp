function inform() {
    console.log("Hellob")
}


document.getElementById("nono").onmouseover = function() {
    console.log("hohoho")
}


let rowvalue = 3
function insertRow() {
    let roww = document.createElement("tr")
    let coll = document.createElement("td")
    let col2 = document.createElement("td")
    let tablle = document.getElementById("sampleTable")
        coll.innerText = "Row" + rowvalue + "cell1"
        col2.innerText = "Row" + rowvalue + "cell2"
        roww.appendChild(coll)
        roww.appendChild(col2)
    rowvalue++
    tablle.append(roww)
}







//Пропагация 


const outer = document.getElementById("outer");
const outera = document.getElementById("outera");
const inner = document.getElementById("inner");

function handleOuterClick() {
  console.log("Outer div clicked!");
}

function handleInnerClick() {
  console.log("Inner button clicked!");
//   event.stopPropagation()  // остановить пропагацию
}

function handleOuteraClick() {
    console.log("outera button clicked!");
  //   event.stopPropagation()  // остановить пропагацию
  }

outer.addEventListener("click", handleOuterClick);
outera.addEventListener("click", handleOuteraClick);
inner.addEventListener("click", handleInnerClick);


// True и False нужны для определения порядка вызова. Если везде указанн true 
// то будет идти по порядку пока не дойдет до false. Если ничего не указанно
// то выведет все от элемента до его родителя на который тоже нажали или тд








// let stylebtn = document.getElementById("jssstyle")

// stylebtn.addEventListener("mouseover", changecolor)

// function changecolor(e) {
//     console.log("ff")
// }



// /*
// Exercise 1: Traversing the DOM
// Knowing how to traverse the DOM using JavaScript provides a foundation
// to altering an HTML page in real time.
// Using the HTML markup in Listing 1, perform these tasks:

// 1. Use the firstElementChild property to access an element.
// 2. Use the lastElementChild property to access an element.
// 3. Use the nextElementSibling property to access an element.
// 4. Use the previousElementSibling property to access an element.
// 5. Use the parentNode property to access an element.
// 6. Use the childNodes property to access a group of child elements.
// */

// /*
// Exercise 2: Targeting nodes
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using / innerText / innerHTML / textContent.
// 2. Change the value of a node using / innerText / innerHTML. / textContent.
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.
// */

// /*
// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.
// */

// // 1

// console.log(document.getElementById("content").firstElementChild)
// console.log(document.getElementById("content").lastElementChild)
// console.log(document.querySelector("h2").nextElementSibling)    // следющий братский элемент
// console.log(document.querySelector("p").previousElementSibling)  // предыдущий братский эл
// console.log(document.querySelector("p").parentNode) 
// console.log(document.getElementById("content").childNodes)


// console.log(document.getElementById("content").firstElementChild.innerHTML)
// document.getElementById("content").lastElementChild.textContent = "LOLOLO"

// console.log(document.querySelector("#content").getAttribute("id"))

// document.querySelector("#content").setAttribute("id", "newid")


// let newp = document.createElement("p")
// let newid = document.querySelector("#newid")

// let h2 = document.querySelector("h2")
// newid.append(newp)
// newid.insertBefore(newp, h2)
// let newspan = document.createElement("span")
// newid.removeChild(h2)     // удалить дочерний
// // newid.replaceChild(newspan, h2 )








