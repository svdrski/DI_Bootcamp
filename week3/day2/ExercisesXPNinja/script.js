//Exercise 1

// 5 >= 1  // true
// 0 === 1  //false
// 4 <= 1 // false
// 1 != 1 // false
// "A" > "B" //false
// "B" < "C" //true
// "a" > "A"  //true
// "b" < "A"  //false
// true === false //false
// true != true  //false



//Exercise 2

// let input = prompt("Type  numbers separated by commas");

// let array = input.split(",");


// console.log(array);

// let result = 0;

// for (i = 0; i < array.length; i++) {

//     result += Number(array[i])
    
// }

// console.log(result);


// Exercise3


// let ask = prompt("give  a sentence containing the word “Nemo”");
// let arr = ask.split(" ");
// let nemoindex = arr.indexOf("Nemo");


// if (nemoindex == -1) {
//     console.log("I can’t find Nemo");
// } else {
//     console.log("I found Nemo at", nemoindex);
// }



// Exercise 4 

let num  = Number(prompt("type number"));

let word = "boom"
let buk = "o"


if (num < 2) {
    console.log(word);
} else if (num % 2 == 0 && num % 5 == 0 ) {
    word = `B${buk.repeat(num)}m !`;
    console.log(word.toUpperCase());
}
  else if (num % 2 == 0)  {
    word = `B${buk.repeat(num)}m !`;
   console.log( word);
} else if (num % 5 == 0 )  {
    console.log(word.toUpperCase());
}  else if (num > 2 && num !== 5) {
    word = `B${buk.repeat(num)}m`;
    console.log( word);
}


