// Bubblesort


// const numbers = [5,111,0,9,1,7,11,4,2,6,355,3,8,222];

// numbers2 = numbers.toString();

// numbers3 = numbers.join(",");


// let buffer;

// for (i = 0; i < numbers.length; i++){

//   for (a = 0; a < numbers.length; a++){

//   if (numbers[a] < numbers[a+1]) {
//     // console.log(numbers[a],numbers[a +1] )
//     buffer = numbers[a+1]
//     numbers[a+1] = numbers[a]
//     numbers[a] = buffer
//     // console.log(numbers[a],numbers[a +1] )
    
//   }
// }

// }

// console.log(numbers)
// console.log(numbers.join(" "))



// // let checker = numbers[0];

// // for ( i in numbers){
 
// //   if (numbers[i] > checker) {
// //     checker = numbers[i]
// //   } 
// // }

// // console.log(checker)






//___________________________


// Stars

let value = " * ";

// for (i = 0; i < 6; i++) {
//   console.log (value);
//   value = value + " * "
// }


// do {
// console.log(value);
// value = value + " * "
// } while (value.length / 3 !== 7)


// for (i = 0; value.lastIndexOf("*") < 18; i++) {
//   while (value.lastIndexOf(" * ") < 3 * i ) {
//     console.log(value);
//     value = value + " * ";
//   }
// }


for (let i = 0;  i < 5; i++) {
  let star = "";
  for (let j = 0; j <= i; j++){
    star = star + " * " 
  }
  console.log(star)
}