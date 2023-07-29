
let gradesList = [20,40,66,77,22,90,99,99,99]


// function findAvg(gradesList) {

//   let sum = 0;
//   for ( let i in gradesList) {
//     sum = sum + gradesList[i];
//   }

//   let average = sum / gradesList.length;

//   if (average > 54) {
//     return "you are passed, your average is " + average;
//   } else {
//     return "you are failed and must repeat the course your average is " + average;
//   }
// }



function findAvg(gradesList) {

  let sum = 0;
  for ( let i in gradesList) {
    sum = sum + gradesList[i];
  }

  let average = sum / gradesList.length;

  return average
}

let number = findAvg(gradesList);


function passtest(number) {

  if (number > 54) {
    return "you are passed, your average is " + number;
  } else {
    return "you are failed and must repeat the course your average is " + number;
  }
}



console.log(findAvg(gradesList))
console.log(passtest(number))



