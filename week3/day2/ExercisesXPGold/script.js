// Exercise 1

// let sentence = ["my","favorite","color","is","blue"];

// let sent = String (sentence);

// console.log(sentence);

// console.log(sent);


// Exercise 2

// let str1 = "mix";
// let str2 = "pod";

// let str11 = str1.slice(0,2);
// let str22 = str2.slice(0,2);



// str1 = str22 + str1.substr(2);
// str2 = str11 + str2.substr(2);

// let result = str1 + " " + str2;

// console.log(result);




// Exercise 3


let num1 = prompt("First number");
let operator = prompt("Type operator (+ - * /)");
let num2 = prompt("Second number");


let result;

if (operator == "+") {
    result = Number(num1) + Number(num2)
} else if (operator == "-") {
    result = Number(num1) - Number(num2)
} else if (operator == "*") {
    result = Number(num1) * Number(num2)
} else if (operator == "/") {
    result = Number(num1) / Number(num2)
} else {
    result = "Uncorrect operator"
}

alert("Result: " + result);

