class Animal { 
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  
  class Dog extends Animal {
    constructor(name,noise) {
      super(name); // call the super class constructor and pass in the name parameter
      // Add a new property
      this.noise = noise;
    }
  
    speak() {
      console.log(`${this.name} barks.It says ${this.noise}`);
    }
  }
  
  let d = new Dog('Mitzie', "Wouaf");
  d.speak(); // Mitzie barks.It says Wouaf

  let a = new Dog('chapa', 'gav gav');

  console.log(a.name)
  a.speak()




  //Dog {name: "Mitzie", noise: "Wouaf"}
  //__proto__: Animal
  //  constructor: class Dog
  //  speak: ƒ speak()
  //__proto__: Object
  

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
  
//     }
//     // Getter
//     get area() {
//       return this.height * this.width;
//     }
  
//     // Setter
//     set area(factor) {
//       this.width = this.height*factor
//     }
//   }
  
// const square = new Rectangle(10,10)
// console.log(square)


// square.area = 2;
// console.log(square.area)














// class rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width
//     }


//     calcArea() {
//         return this.height *  this.width
//     }

// }


// const square = new rectangle( 10, 10)

// console.log(square.calcArea())

// console.log(square)


class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit.type)
blackRabbit.speak('Hello suka')


killerRabbit.speak('sosaaa')