// const myDiv = document.querySelector("div");
// console.log(myDiv);

// const myDiv1 = document.querySelector("#idDiv");
// console.log(myDiv1);

// const myDiv2 = document.querySelector(".classDiv");
// console.log(myDiv2);

// const divList = document.querySelectorAll("div");
// console.log(divList);

// const parentDiv = document.getElementById("parent");
// console.log(parentDiv);

// const classDiv = document.getElementsByClassName("classDiv");
// console.log(classDiv);

// const divs = document.getElementsByTagName("div");
// console.log(divs);

// const myDiv = document.querySelector("div");
// console.log(myDiv);

// const myDiv1 = document.getElementsByTagName("div");
// console.log(myDiv);

// const myDiv2 = document.getElementsByTagName("body")[0].firstElementChild;
// console.log(myDiv2);

// const ul = document.querySelector("ul");
// console.log(ul);

// const ul1 = document.getElementsByTagName("ul");
// console.log(ul1[0]);

// const ul = document.querySelector("ul");
// console.log(ul.children[1]);

// const secondChildElement = ul.querySelector(":nth-child(2)");
// console.log(secondChildElement);

const ul = document.querySelector("ul");
const div = document.querySelector("#myDiv");
const input = document.querySelector("#myInput");
const listItem = document.querySelector("li");
const body = document.querySelector("body");

function changeHtml() {
  div.innerHTML = "Fruits";

  ul.innerHTML = `
    <li>Apple</li>
    <li>Banana</li>
    <li>Durian</li>
`;
}

function addListItem() {
  const newLi = document.createElement("li");
  //   const newText = document.createTextNode("new list item :)");
  //   newLi.append(newText);
  newLi.innerHTML = input.value;
  ul.append(newLi);
  input.value = "";
}

function deleteElement() {
  ul.remove();
}

function removeFromDom() {
  //   ul.style.backgroundColor = "red";
  ul.style.display = "none";
}
function returnToDom() {
  ul.style.display = "block";
}

console.log(div.hasAttribute("id"));
console.log(div.getAttribute("id"));
console.log(listItem.getAttribute("style"));
// listItem.setAttribute("style", "background-color:pink;color:green;");
listItem.removeAttribute("style");

const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://www.realsimple.com/thmb/762HJU1apQC6n0YeE5fnDeVXQ7s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthiest-fruits-to-eat-GettyImages-1341556585-19ff7496ef744022b77011b8dc369d3f.jpg"
// );
img.src =
  "https://hips.hearstapps.com/hmg-prod/images/pattern-of-slices-citrus-fruit-of-lemons-oranges-royalty-free-image-1690494580.jpg?crop=1.00xw:0.752xh;0,0.115xh&resize=1200:*";
img.style = "width:400px;height:300px;";
body.append(img);

listItem.classList.add("red");
listItem.classList.add("yellow");

listItem.setAttribute("id", "whatevertheidis");
