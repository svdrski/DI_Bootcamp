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
