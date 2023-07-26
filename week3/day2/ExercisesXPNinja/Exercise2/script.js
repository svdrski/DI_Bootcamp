let input = prompt("Type  numbers separated by commas");

let array = input.split(",");


console.log(array);

let result = 0;

for (i = 0; i < array.length; i++) {

    result += Number(array[i])
    
}

console.log(result);