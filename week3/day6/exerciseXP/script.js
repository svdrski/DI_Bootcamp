// Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];

// people.splice("Greg",1);
// console.log(people);

// people[2] = "Jason";
// console.log(people);

// people.push("Hleb");
// console.log(people);

// console.log(people.indexOf("Mary"));

// let peoplecopy = people.slice(1,3);

// console.log(peoplecopy);

// console.log(people.indexOf("Foo")); /// because there is no Foo

// let last = people[people.length - 1];

// console.log(last);



// for ( let i of people) {
//     console.log(i)

//     if (i === "Devon") {
//         break;
//     }
// } 



// Exercise 2

// let colors = ["pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green", "pink", "blue", "red", "green"];
// let suffix;

// for (let i in colors) {
    
// // console.log(`My #${ Number(i) + 1} chois is ${colors[i]}`)


// if (Number(i) === 10 || Number(i) === 11 || Number(i) === 12  ){
// suffix = "th"
// } else if (Number(i.slice(-1)) === 1 ) {
// suffix = "nd"
// }  else if (Number(i.slice(-1)) === 2 ) {
// suffix = "rd"
// }  else if (Number(i.slice(-1)) === 0) {
// suffix = "st"
// } else {
//     suffix = "th"
// }

// console.log(`My ${( Number(i) + 1) + suffix} chois is ${colors[i]}`)
// }



// Exercise 3

// let num = Number(prompt('insert a number'));

// console.log(typeof(num))

// // while (num < 10) {
// //  num = Number(prompt('insert a new number > 10'));
// // }

// do {
//     num = Number(prompt('insert a new number > 10'));
// } while (num < 10)



// Exercise 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// //Console.log the number of floors in the building.
// console.log(building.numberOfFloors);


// //Console.log how many apartments are on the floors 1 and 3.
// console.log(`On the floors 1 and 3 there are ${building.numberOfAptByFloor.firstFloor
//     + building.numberOfAptByFloor.thirdFloor}`);

// //Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log(`name of the second tenant is ${building.nameOfTenants[1]}
//  and he has ${building.numberOfRoomsAndRent.dan[0]} rooms in his apartment`);

//  //Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent.
//  // If it is, than increase Dan’s rent to 1200.

// if (building.numberOfRoomsAndRent.sarah[1]
//     + building.numberOfRoomsAndRent.david[1]
//     > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log ( building.numberOfRoomsAndRent.dan[1]);





// Exercise 5

// let family = {
//     Mother: "Anna",
//     Father: "John",
//     Son: "Alex"
// }

// for (let i in family) {
//     console.log(i)
// }

// for (let i in family) {
//     console.log(family[i])
// }



// Exercise6 

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

  
//   for ( let i in details) {
//     console.log(i, details[i] )
//   }

//   let string = "";

//   for ( let i in details) {
//    string = string + (i + " " + details[i] + " ")
//   }

//   console.log(string)


// Exercise 7 


// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let secretName = [];

// for (i = 0; i < names.length; i++) {
// secretName[i] =  names[i].slice(0,1);
// }

// secretName =  secretName.sort().join("");

// console.log(secretName);
