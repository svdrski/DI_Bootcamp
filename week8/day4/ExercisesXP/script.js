/// EX 1

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// - I am John Doe from Vancouver, Canada. Latitude (49.2827), Longitude (-123.1207)


// EX 2 

function displayStudentInfo(objUser){
    let  {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


// EX3 
const users = { user1: 18273, user2: 92833, user3: 90315 }

let arrays = Object.entries(users)
console.log(arrays)
let result1 = arrays.map(([a, b]) => [a, b*2])

console.log(result1)


// EX 4 

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);

  // object




  // EX 5   

  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

//    2 will successfully extend



// Exercise 6 

// false [2] === [2] 
// false {} === {}

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;  
console.log(object2.number)  // 4
console.log(object3.number)  // 4 
console.log(object4.number)  // 5


class Animal {
    constructor (name, type, color) {
        this.name = name,
        this.type = type,
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color, voice) {
        super(name, type, color)
        this.voice = voice
    }

    sound() {
        console.log(` ${this.voice} I'm a ${this.type} named ${this.name}, I'm ${this.color} ${this.type}`)
    }
}

let farmerCow = new Mamal('Alex', 'dog', 'red and yellow', 'Gav')


farmerCow.sound()