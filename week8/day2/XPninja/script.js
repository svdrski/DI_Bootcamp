const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];


let sum1 = function (array) {
  let acc = 0;
  for (a of array) {
   acc +=  (a.age * 7)
  }
  console.log(acc) 
}
sum1(data)

let yearssum = data.reduce((acc, value) => {
  return acc + value.age * 7 }, 0)
console.log(yearssum)


//// Exercie 2

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
let result1 = userEmail3.replace(' ', '')
console.log(result1)


///Exercise 3

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


let result2 = users.map(value => ({
[`${value.firstName} ${value.lastName}`]: value.role
}))
console.log(result2)

// => ({ code}) используется для возврата в виде обекта


//Exercsie 4

const letters = ['x', 'y', 'z', 'z']

let result  = {}

for (i=0;i<letters.length;i++) {
  let letter = letters[i]
  if (result[letter]){
    result[letter]++
  } else {result[letter] = 1
}}

console.log(result)

////

let reducce = letters.reduce ((acc, value) => {
if(acc[value]){
  acc[value]++
} else {acc[value] = 1}
return acc
}, {})

console.log(reducce)
