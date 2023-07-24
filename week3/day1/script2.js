let x = 5, y = 7;


console.log(x, y, x + y);

const color = "red";
/* fcsafas */

let firstName = "John";
let secondName = "Sas"

let fullName = firstName + " " + secondName;

console.log (fullName);

let longString = " casfas  aasas as  as as assadsassad as" +
"fasfasfs fsafasfasfas fsafas" + "dsafasf fsaf asfasfasfas";

console.log(longString);

console.log(longString.length);

//номер символа или слова

let pos = fullName.indexOf("Sas");
console.log(pos);

let posLast = longString.lastIndexOf("as");
console.log(posLast);

let posLast2 = longString.indexOf("ffvcxxzgh");
console.log(posLast2);




//search 

let zoc = longString.search("as");
console.log(zoc);


//slice Обрезать и начать строку с номера символа

let str = "Apple, Banana, Kiwi";
let res = str.slice(2);
let ress = str.slice(-2);
let srb = str.slice(2, 4); //Начало и конец области вырезания

let ooo = str.slice(str.length - "Banana".length)
console.log(res, srb, ress);

//substring
// substr

//replace замена 

let stra = "Please visit microsoft";
let newstr = stra.replace("microsoft", "Developers institute");
console.log(newstr);


//toUppercase()
//toLowercase()

console.log(newstr.toLowerCase());
console.log(stra.toUpperCase());


//Обьединение concat

let txt1 = "Hello";
let txt2 ="World";
let txt5 = "!!!!!"
let txt3 = txt1 + " " + txt2 + txt5;

let txt4 = txt1.concat(" ", txt2, txt5);

console.log(txt3, txt4);


//trimLeft
//trimRight
//trim


let sttr = "     hello     ";
console.log(sttr.trimLeft());
console.log(sttr.trimRight());
console.log(sttr.trim());


let num1 = 6.00053;
let num2 = 7;
let num3 = num1 + num2;

console.log(num3);


//toString() перевод в строку

let numnum = num3.toString();

console.log(numnum);

let str1 = new String(num2);

console.log(str1);


//toFixed фиксированное кол-во цифр после точки

console.log(num3.toFixed(5));


//toPrecision фиксированное кол-во цифр c начала


console.log(num3.toPrecision(4));

//Перевод строки в число

let xx = Number("12");

parseInt("10");
parseFloat("10.33");

console.log(xx);


let bol = true;

bol = false;

let bola = Boolean(3); //true все числа
let bols = Boolean(0);  //false 0


console.log(bola, bols);
