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

// Shift 

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

