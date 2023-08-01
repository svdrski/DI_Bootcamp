// function isDivisible(){

//    for (let i=0; i <=500; i++){
//       if (i % 23 === 0) {
//          console.log(i);
//       }
//    }
// }

// isDivisible()

function isDivisible(divisor){

   let sum = 0;

   for (let i=0; i <=500; i++){
      if (i % divisor === 0) {
         sum = sum + i;
         console.log(i);
      }
   }

   console.log("The sum is ", sum);
}

isDivisible(23)