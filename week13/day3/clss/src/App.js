import React from 'react';
import SearchCar from './SearchCar';
import Car from './Car';

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenCars: [],
      nameChosenCar: ""
    };
  }

  handleChange = event => {
    const searchedCars = listCars.filter((car) =>
    car.brand.includes(event.target.value))
    this.setState(
      {
        nameChosenCar: event.target.value,
        chosenCars: searchedCars
      }
    )
    console.log(this.state)
  }

  render() {
    return (
      <div className="box" >
        //new code here
        <SearchCar searchCar={this.state.nameChosenCar} 
                   handleChange={this.handleChange} />
        <Car chosenCar={this.state.chosenCars} />
      </div>
    )
  }
}

export default App;




// function App() {


// //   class Animal {
// //     constructor(name) {
// //       this.name = name
// //     }

// //     speak(){
// //       console.log(`${this.name} makes a noise`)
// //     }
// //   }

// // class dog extends Animal {
// //   constructor(name, noze){
// //     super(name)
// //     this.noze = noze
// //   }

// //   makenoize(){
// //     console.log(`${this.name} says ${this.noze}`)
// //   }
// // }

// // const chapa = new dog('chapa', 'gav')


// // chapa.speak()





//   // class Animal {
//   //   constructor(name){
//   //     this.name = name
//   //   }
  
//   //   makesound(){
//   //     console.log("Animal sound")
//   //   }
//   // }
  



//   // class Dog extends Animal  {
//   //   constructor(name, voice){
//   //     super(name),
//   //     this.voice = voice
//   //   }

//   //   makegav (){
//   //     console.log(this.name +' '+ this.voice)
//   //   }

//   // }

//   // const chapa = new Dog ('Chapa', 'Gav')

//   // chapa.makesound()
//   // chapa.makegav()




//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
