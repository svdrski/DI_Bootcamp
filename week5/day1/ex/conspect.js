// click: Событие возникает при клике на элементе.
// mouseover: Событие возникает, когда указатель мыши наводится на элемент.
// keydown: Событие возникает при нажатии клавиши на клавиатуре.
// submit: Событие возникает при отправке формы.
// resize: Событие возникает при изменении размеров окна браузера.
// Чтобы обрабатывать события DOM, вы можете назначать обработчики событий с использованием JavaScript. Обработчики событий позволяют выполнять определенные действия при возникновении событий, таких как вызов функции или изменение элементов на странице.

// Пример добавления обработчика события click:

// javascript
// Copy code
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
  // Действия, выполняемые при клике на кнопку
});





event.preventDefault() // нужен чтобы отменить стандартное действие например переход по ссылке когда на нее нажимаешь
// а вместо этого делал что-то другое

myLink.addEventListener("click", function(event) {
  event.preventDefault(); // Предотвращаем стандартное действие (переход по ссылке)

  // Выводим сообщение вместо перехода по ссылке
  alert("Вы кликнули на ссылку, но переход не произошел!");
});






////е 
{/* <button id="btn">Click me</button>
<button id="btn1">Hey Hey</button>

<script>
    let x = document.getElementById("btn")
    let y = document.getElementById("btn1")

    y.addEventListener("mouseover", RespondMouseOver);

    x.addEventListener("mouseover", RespondMouseOver); 

    function RespondMouseOver(e) { 
        // console.log("e", e) 
        // // all the properties of the event object
        // console.log("My mouse is over the btn named" + e.target.innerHTML)  
        // console.log("e.type: ", e.type)
        // // // e.type: mouseover
        console.log("e.target: ", e.target)
        // e.target:  <button id=​"btn1">​Hey Hey​</button>​
    } 
</script> */}



// Работа с dropdown 

// <select id="A">
//   <option value="apple">Apple</option>
//   <option value="pear">Pear</option>
//   <option value="banana">Banana</option>
// </select>

// <script>
//   //get the select form
//   let dropdown = document.getElementById('A')

//   // all three lines do the same thing
//   dropdown.options[2].selected = true; //Banana selected
//   dropdown.value = 'banana'; //Banana selected
//   dropdown.selectedIndex = 2; //Banana selected

//   // To check which option is selected
//     console.log(dropdown.selectedIndex) // "2"
//     console.log(dropdown.value) // "Banana"
// </script>

// input.checked	Check if the input is checked : return a boolean

// <select id="select1"> 
// <option value="apple">Middle School</option>
// <option value="pear">University</option>
// <option value="banana">College</option>
// </select>

// <button id="alertt">Show</button>

// <script>

// let sel = document.getElementById("select1")

// console.log(sel[2].value)  

// let newopt = document.createElement("option")
// newopt.setAttribute("value", "work")
// newopt.textContent = "Institute"
// sel.append(newopt)

// let fopt = document.createElement("option")
// fopt.setAttribute("value",  "Primary School")
// fopt.textContent = "Primary School"
// sel.insertBefore(fopt, sel.firstChild)

// sel.selectedIndex = 3


// let btn = document.getElementById("alertt")

// btn.addEventListener("click", showresult)

// function showresult() {
// let res = sel.options[sel.selectedIndex].textContent
// alert(res)
// }

// </script>





// <!-- 

// <form id="form1" onsubmit="getvalue()"> 
//   <label>First name: </label><input type="text" name="fname" value="David"><br> 

//   <label>Last name: </label><input type="text" name="lname" value="BenGurion"><br> 

//   <input type="submit" value="Submit"> 
// </form> 


// <select id="A">
// <option value="apple">Apple</option>
// <option value="pear">Pear</option>
// <option value="banana">Banana</option>
// </select>

// <script>
// //get the select form
// let dropdown = document.getElementById('A')

// // all three lines do the same thing
// dropdown.options[2].selected = true; //Banana selected
// dropdown.value = 'banana'; //Banana selected
// dropdown.selectedIndex = 2; //Banana selected

// // To check which option is selected
//   console.log(dropdown.selectedIndex) // "2"
//   console.log(dropdown.value) // "Banana"
// </script> -->


