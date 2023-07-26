const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift(0,1);

fruits.sort()

fruits.push("kiwi");

fruits.shift();

fruits.reverse();

console.log(fruits);



const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];


console.log(moreFruits[1][1]);

// or 

let orange = moreFruits[1];

console.log(orange[1]);