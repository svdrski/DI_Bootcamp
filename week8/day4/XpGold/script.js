// Exercise 1

function printFullName (value) {
  let {first, last} = value
  console.log(`Your full name is ${first} ${last}`)
}
printFullName({first: 'Elie', last:'Schoppik'}) 




/// Exercise 2

function keysAndValues (value) {
  let obj = Object.fromEntries(Object.entries(value).sort())
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  console.log([keys, values])
}

keysAndValues({ a: 1, c: 3, b: 2 }) /// Unfiltered
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined })


/// Exercise 3

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter(); //count 0
counterOne.increment(); //1
counterOne.increment(); //2

const counterTwo = counterOne;
counterTwo.increment(); //3

console.log(counterOne.count); //3
