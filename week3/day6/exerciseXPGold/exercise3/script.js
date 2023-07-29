let age = [20,5,12,43,98,55];

let sum = 0;

let highestAge = 0;

//. Console.log the sum of all the numbers in the age array.

for ( i = 0; i < age.length; i++) {
  sum = sum + age[i]
  console.log(sum)
}


//Console.log the highest age in the array.

for ( i = 0; i < age.length; i++) {
  if (age[i] > highestAge) {
    highestAge = age[i]
  }
}

console.log(highestAge)
