

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
