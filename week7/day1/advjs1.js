// every 

// array.every(function(currentValue, index, array) {
//     // Условие проверки для каждого элемента
//   });
  

// function isCanine(element, index, arr) {
//     console.log("Checking if " + arr[index] + " is a canine.")
//     return (element == "dog" || element == "doggo")
//   }
  
//   let arr = ["dog", "cat", "doggo"]
//   console.log(arr.every(isCanine)); 
  

// function checkAge(age) {
//     if (age < 18) {
//       const message = "Sorry, you're too young.";
//     } else {
//       const message = "Yay! You're old enough!";
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(21));


// const numbers = [10,11,12,15,20];

// numbers.forEach((number, index) => {
//     if  (number % 2 === 0 ) {
//         console.log(number)
//     }
// })

// const words = ["wow","hey","bye"]

// let result = words.some( (curvalue) =>  curvalue[0] === 'h'
// )

// console.log(result)



const words = ["hello","hey","hola"];

let result = words.every( (value) => value[0] === 'h')

console.log(result)



// let b = 3, d = b, u = b;

// let calcul = (x, operator, y) =>  {
//     return operator === '+' ? x + y : operator === '-' ? x - y : operator === '*' ? x * y : undefined
// }

// let newcalc =  calcul(6,'+',2)
// let newcalc2 =  calcul(6,'-',2)
// let newcalc3 =  calcul(6,'*',2)

// console.log (newcalc)
// console.log (newcalc2)
// console.log (newcalc3)




// const tree = ++d * d*b * b++ + 





// let tee = 'The quick brown fox jumps over the lazy dog'
// let www = 'We promptly judged antique ivory buckles for the prize'

            
// let nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


// function pangrams (s) {
// for (i=0; i < nums.length; i++) {
//     if (nums.includes(s[i])){
//        console.log('it is a pangram')
//     } else {
//         console.log('not pangram')
// }
//     }
// }
 

// pangrams(tee)


// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// function pangrams(s){
//     for(let i = 0; i < alphabet.length; i++){
//         if(!s.includes(alphabet[i])){
//             return "not pangram";
//         }
//     }
//     return "pangram";
// }