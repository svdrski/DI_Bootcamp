// Exercise1

// let obj1 = {
// FullName: "Hleb",
// Mass: 100,
// Height: 1.90,
// IMT: function () {
// return this.Mass / (this.Height * this.Height)
// }
// }

// let obj2 = {
//    FullName: "Lev",
//    Mass: 80,
//    Height: 1.20,
//    IMT: function () {
//    return this.Mass / (this.Height * this.Height)
//    }
// }


// function largest () {
// if (obj1.IMT() - obj2.IMT() < 0 ) {
//    return obj2.FullName
// } else {
//    return obj1.FullName
// }
// }


// console.log(`Owner of largest Bmi is ${largest()}`)











// Exercise2



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




