let num = Number(prompt('insert a number'));

console.log(typeof(num))

// while (num < 10) {
//  num = Number(prompt('insert a new number > 10'));
// }

do {
    num = Number(prompt('insert a new number > 10'));
} while (num < 10)