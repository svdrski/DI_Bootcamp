

let result = "";
let result2 = "";
let opers = ["-", "+", "*", "/"]
let outputElement = document.getElementById("input");
let shouldInputSecondNumber = false;



function number(num) {
    if (shouldInputSecondNumber) {
        result2 = result2 + num
        console.log(result2)
        outputElement.textContent = result2;
    }
    
    result = result + num;

    if (opers.includes(result[result.length - result2.length - 1])) {
        outputElement.textContent = result2;
    } else {
        outputElement.textContent = result;
    }
    
}

function operator(operator) {
    
    if ( opers.includes(result[result.length -1])) { // если последнее значение оператор
    result = result.slice(0, -1) + operator
    result2 = "";
    outputElement.textContent = result[result.length -1]
    shouldInputSecondNumber = true;
    }
    result = result + operator;
    result2 = "";
    shouldInputSecondNumber = true;
    outputElement.textContent = result[result.length - 1]
}


function equal() {
    outputElement.textContent = eval(result)
    result = eval(result);
    result2 = "";
}

function Reset() {
   result = "";
    result2 = "";
    outputElement.textContent = result

}

function Clear () {
    result = "";
    outputElement.textContent = result
}
