//array Множество

let fruit1 = "banana";
let fruit2 = "orange";
let fruit3 = "apple";

let arr = [];
let arr2 = new Array();

let fruits = ["banana", "orange", "apple"];

let fruits2 = ["apple", "mango"];

let fruits4  = ["salo", "luk"];

fruits[fruits.length] = "kiwi" // добавить в конец множества
fruits[fruits.length] = "lemon"

fruits[0] = "watermelon"; // перепишет самый первый

console.log(fruits);



//toString перевод в строку

let str = fruits.toString();

console.log(str);


// unshift Добавить в начало

fruits.unshift("fsafsa");

// Push  добавить в конец

fruits.push('kiwi');
console.log(fruits); 


//Pop  удаляет последний

let f = fruits.pop();
console.log(fruits, f);

// Shift  Удаляет первый элемент

let g = fruits.shift();

console.log(fruits, g);

console.log(fruits);


//concat обьеденить множества

let fruits3 = fruits.concat(fruits2, fruits4);
console.log(fruits3);

//Slice  вырезать элемент и не меняет оригинал

let n = fruits.slice(0,1);

console.log(n); //показать без вырезанного элемента



//splice  вырезает из ориганала 

let p = fruits.splice(1,1); // снчала порядковый номер а потом кол-во сколько нужно удалить
console.log(p)


// charAt выводит символ по порядковому номеру

fruits.chart()


// Сортировка по алфавиту 
fruits.sort()


// Перевернуть список с зада на перед
fruits.reverse();



// Алерт

alert("Hello");

// Алерт с полем ввода
let age = prompt('How old are you?', 20); 
alert(`You are ${age} years old!`);

// Алерт с кнопками да / отмена (true false)

let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed

//substr Вырезает символы из строки 

// const sub1 = str.substr(4);      // Извлечение всех символов, начиная с индекса 4: "Script is awesome!"
//const sub2 = str.substr(0, 10);  // Извлечение 10 символов, начиная с индекса 0: "JavaScript"
//const sub3 = str.substr(-7);     // Извлечение всех символов, начиная с предпоследнего и до конца: "awesome!"
// const sub4 = str.substr(11, 2);  // Извлечение 2 символов, начиная с индекса 11: "is"


// Метод split() является одним из методов строк (String) в JavaScript, который позволяет разбивать строку на массив подстрок, используя заданный разделитель. Каждый разделитель, найденный в исходной строке, становится точкой разделения, а части между разделителями преобразуются в элементы нового массива.

let input = prompt("Type  numbers separated by commas");

let array = input.split(",");


//  .join("") Переводит множество в строку и удаляет запятые 

secretName =  secretName.join("");

//Фильтр с помощью или возвращает true


var person = {
  name: 'Jack',
  age: 34
}
console.log(person.job || 'unemployed');
// 'unemployed'


// с помощью && возвращает false

var person = {
  name: 'Jack',
  age: 34
}
console.log(person.age > 18 && 'Driving allowed');
//Подводя итог, для практических приложений мы можем использовать ORоператор для установки значений по умолчанию, и мы можем использовать ANDоператор для выполнения кода во втором операнде, если первый является истинным.



//Cинтаксис доступа к обьекту
objectName.propertyName
OR
objectName["propertyName"]


// Удаление значения обьекта

let person = {
  firstName: "John",
  lastName: "Doe",
};
delete person.firstName
console.log(person) 
// {
//   lastName: "Doe",
// };


// тест на опредение email почта 

let regex = /^.+@.+\..+$/;
console.log(regex.test('johndoe@gmail.com')); //returns true


/// создать новый отдельный обьект на основе существующео 

 let obj1 = {name: "Bill"}
    let obj2 = Object.assign({},obj1)

Даты в Javascript являются объектами.

    let today = new Date(); //current date
    console.log(today)

    let date1 = new Date(2019, 10, 1); // 2019-11-04 
    console.log(date1) //The month is zero-index. Day and year are not. 
Вы можете установить новую дату относительно другого объекта даты:

    let date2 = new Date();
    date2.setDate(date2.getDate() + 5);  //5 days into the future
Вы можете сравнивать даты if (date1 > date2) {}

Вы можете показать разницу между датами, отображаемыми в миллисекундах. let d3 = date2 - date1.
Чтобы затем показать, что разница преобразуется в дни, объявив d3 = d3 / (1000 * 60 * 60 *24).