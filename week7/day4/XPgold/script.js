// let landscape = function() {

//     let result = "";
   
//     let flat = function(x) {
//       for(let count = 0; count<x; count++){
//         result = result + "_";
//       }
//     }
   
//     let mountain = function(x) {
//       result = result + "/"
//       for(let counter = 0; counter<x; counter++){
//         result = result + "'"
//       }
//       result = result + "\\"
//     }

//     flat(4);
//     mountain(4);
//     flat(4)
   
//     return result;
//    }
   
//    console.log(landscape())

//    ____/''''\\____   first we call flat(4) that change result
// to ____ then we call mountain(4) that add to result / and ' x4 and finnaly \
// then we call flat(4) that add ____ to the end
// finnaly it return result
//____/''''\____ 



   
let landscape = function() {

    let result = "";
    let flat = x =>  result += "_".repeat(x)
    let mountain = x => {
        result += "/"
        result += "'".repeat(x)
        result += "\\"
    }

    flat(4);
    mountain(4);
    flat(4)
   
    return result;
   }
   
   console.log(landscape())




   /////// Exercise 2 

const addTo = x => y => x + y;
const addToTen = addTo(10); // take addTO and use it with 10
console.log(addToTen(3))


// addToTen = 10 => y => 10 + y
// addToTen(3) = 10 => 3 =>10 + 3
// 13


/////// Exercise 3

const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1))

// 31
// curriedSum = (30) => (1) => 30 + 1



/////// Exercise 4 

const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)  // (5) => (b) => 5 + b
console.log(add5(12))  // (5) => (12) => 5 + 12
//17

////// Exercise 5

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add55 = (num) => num + 5;
console.log(compose(add1, add55)(10))   ///   (add1, add55) => (10) => f(g(10));

// 10 + 5 / 15 + 1 / 16





