// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // ['bread', "carrot", "potato", 'chicken', "apple", "orange"]


// // ------2------
// const country = "USA";
// console.log([...country]);

// // ['U','S','A']

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// // ['undefind','undefind']




// Exercise 2

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


//2.1
const welcomeStudents = users.map(value => 'Hello ' + value.firstName )
console.log(welcomeStudents)

//2.2
const onlyfullstack = users.filter(value => value.role.includes('Full Stack'))
console.log(onlyfullstack)

//2.3
const lastName = onlyfullstack.map(value => value.lastName)
console.log(lastName)



// Exercise 3
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const result = epic.reduce((start, value) => start + value)
console.log(result)


//Exercise 4

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let passed = students.filter(v => v.isPassed)
console.log(passed)

let congrats = passed.forEach(v => console.log('Good job ' + v.name + ' you passed the course in Information Technology')) 
