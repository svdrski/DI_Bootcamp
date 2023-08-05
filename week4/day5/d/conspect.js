Accessing Elements DOM

element.children[index]
element.firstElementChild
element.lastElementChild
element.parentNode
element.nextElementSibling
element.previousElementSibling
element.textContent


Accessing Nodes With Methods
element.getElementById()
element.getElementsByClassName()
element.getElementsByTagName()
element.querySelector()

// const myDiv = document.querySelector("div")
// const myDiv = document.querySelector(".classdiv") // Возвращает только первый класс
// const myDiv = document.querySelectorAll(".classdiv") // Возвращает все
// const myDiv = document.querySelector("#id") // Возвращает id

// const myDiv = document.querySelectorAll(".classdiv") // Возвращает все


elem.hasAttribute(name)	// Проверяет на существование

elem.getAttribute(name)	// возвращает значение атрибута если их не то путсая строка 

elem.setAttribute(name, value) // добавляет атрибут и его значение если атрибут уже есть то меняет значение

elem.removeAttribute(name)	// удаляет атрибут 



elems.className = "news" /// Переписать класс
elems.classList.add("ffff") // Добавить новый класс в список
elems.classList.remove("ffff") // удалить класс
elems.classList.add("hoho", "lala") //  Добавить несколько классов
elems.classList.remove("hoho", "lala")  // Удалить несколько классов
elems.classList.replace("news", "stars") // Заменить класс
console.log(elems.classList.contains("stars")) // bool проверяет есть ли класс
elems.classList.toggle("starss") //добавляет если такого класса нет и удаляет если есть
elems.classList.toggle("starss", true) // (true/false ) Если второй параметр равен true, то класс будет добавлен к элементу, если он еще не существует. Если второй параметр равен false, то класс будет удален, если он уже существует.





element.innerHTML/innerText = new html  //- Изменение внутреннего HTML-содержимого элемента.
element.attribute = new value //- Изменение значения атрибута HTML-элемента.
element.style.property = new style // - Изменение стиля HTML-элемента.
element.setAttribute(attribute, value)  //Изменение значения атрибута HTML-

// Пример 1: Изменение внутреннего HTML-содержимого элемента
let element1 = document.getElementById("myElement");
element1.innerHTML = "<p>This is a new paragraph.</p>";

// Пример 2: Изменение значения атрибута элемента
let element2 = document.querySelector("img");
element2.src = "new-image.jpg";

// Пример 3: Изменение стиля элемента
let element3 = document.querySelector(".myDiv");
element3.style.backgroundColor = "blue";
element3.style.color = "white";

// Пример 4: Изменение значения атрибута с использованием setAttribute
let element4 = document.getElementById("myLink");
element4.setAttribute("href", "https://www.example.com");





document.createElement(element)	//Create an HTML element
document.removeChild(element)//	Remove an HTML element
document.appendChild(element)//	Add an HTML element
document.replaceChild(new, old)//	Replace an HTML element

// Пример 1: Создание HTML элемента
let новыйПараграф = document.createElement("p");
новыйПараграф.innerHTML = "Это новый параграф.";
document.body.appendChild(новыйПараграф);

// Пример 2: Удаление HTML элемента
let элементДляУдаления = document.getElementById("мойЭлемент");
document.body.removeChild(элементДляУдаления);

// Пример 3: Добавление HTML элемента
let новыйЗаголовок = document.createElement("h1");
новыйЗаголовок.innerHTML = "Это новый заголовок.";
document.body.appendChild(новыйЗаголовок);

// Пример 4: Замена HTML элемента
let новыйЭлемент = document.createElement("div");
новыйЭлемент.innerHTML = "Это заменяющий элемент.";
let старыйЭлемент = document.getElementById("старыйЭлемент");
document.body.replaceChild(новыйЭлемент, старыйЭлемент);