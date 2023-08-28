let arr = [1,2,3,4,5,6,7,2,3,4,4,4,4]

//1 SUM
function summer (array) {
  let sum =0;
  array.forEach((value) => sum += value) 
  console.log(sum) 
}
summer(arr)

//2 Remove Duplicates
console.log(arr)
function Duplicates (array) {
  let copies = []
  array.forEach( (eachvalue, index)=> copies.includes(eachvalue) ? arr.splice(index) : copies.push(eachvalue)
  )
  console.log(array)
}

Duplicates(arr) 

//3 

let sample = [NaN, 0, 15, false, -22, '',undefined, 47, null]
console.log(sample)

function Remove_Certain (array) {
  return array.filter( (value) => value !== null && value !== "" && value !== 0 && value !== false && value !== undefined &&  !isNaN(value))
}

let neww = Remove_Certain(sample)
console.log(neww)


//4
let repeat = (value, quant = 1) => value.repeat(quant)

console.log(repeat('Ha!'));
console.log(repeat('Ha!',3));


//5
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');

console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));