

let result = "";
let opers = ["-", "+", "*", "/"]

function number(num){
    result = result + num
}

function operator(operator) {

    if ( opers.includes(result[result.length -1])) {
    return
    }

    result = result + operator
}

function equal() {
    console.log(eval(result));
}

