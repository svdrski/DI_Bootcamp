// const arr = [
//   {id:1, name:'iPhone', price:850},
//   {id:2, name:'iPad', price:750},
//   {id:3, name:'iWatch', price:650}
// ];

// let newaa = arr.forEach((value) => {
//   console.log( `id is ${value.id} name is ${value.name} price is ${value.price}` )
// })

// const words = ["wow","hey","bye"];


// let checl = words.some((value) => value[0] === 'h' )

// console.log(checl)

// (function print () {
//   console.log("hello suka")
// })()



// print2()
// function print2 () {
//   console.log("AAaaa")
// }

// (function(greeting){
//   console.log(greeting);
// }('hey'))

// (function fpintaa (value) {
//   console.log(value)
// }('sukkkka'))

// ((a) => {
//   console.log(a); // prints 10
// })(10)


// function add() {
//   let counter = 0;  // create counter as number
//   /////----------------------
//   function plus() {   // create new function
//       counter += 1;    //  add 1 to counter
//       console.log(counter) ; //console log counter
//   }
//   plus();  // start function plus - (counter + 1)
// }

// add() // start function - result - console log 1


/// замыкания

// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }

// let fnInside = outside(3);


// let result = fnInside(5); // The same as calling outside(3)(5)
// console.log(result) // returns 8



let add = (function () {
  let counter = 0;
  function calculus() {
      counter += 1; 
      return counter
  }
    return calculus
  
})();

add();
add();
add();