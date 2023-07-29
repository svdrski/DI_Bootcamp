let numbers = [123, 8409, 100053, 333333333, 7]


for ( let i in numbers) {
 if (i % 3 === 0) {
    console.log(i, true)
 }  else {
    console.log(i, false)
 }
}


///without dots

for ( let i in numbers) {

    if (numbers[i] / 3 == parseInt(numbers[i] / 3)  ) {
       console.log(i, true)
    }  else {
       console.log(i, false)
    }
   }