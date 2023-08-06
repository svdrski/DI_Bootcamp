// function numbers() {
//   for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();


let score = 10000;
let vat = 17;

let lastrev = 1000;
let lastex = 600;

let withvat = lastex + ((lastex * vat)/100)
let lastvalue = lastrev - lastex;

console.log(withvat)


