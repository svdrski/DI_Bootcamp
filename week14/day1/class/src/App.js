import logo from './logo.svg';
import React from 'react'
import { SearchCar } from './SearchCar';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import { Car } from './Car';
import Math from './MathOperarion';

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

 
  

  function getAlphabet() {
    return ['a', 'b'];
  }
  
  // no array destructuring
  let itemOne = getAlphabet()[0];
  let itemTwo = getAlphabet()[1];
  
  // array destructuring
  const [itemOne, itemTwo] = getAlphabet();
  


  constructor () {
    super()
    this.state = {
      chosenCars: [],
      nameChosenCar: ""
    }
  }

   handleChange = (e) =>{
    const searchedCars = listCars.filter(car=> car.brand.includes(e.target.value))
    this.setState({nameChosenCar: e.target.value, chosenCars:searchedCars})
  }

  render() {
    return (
      <div className='box'>
      <SearchCar listCars={listCars} handleChange={this.handleChange}/>
      <Car nameChosenCar={this.state.nameChosenCar} chosenCar={this.state.chosenCars}/>
      <Math num1={15} num2={0}/>
      </div>
    );
  }

}

export default App;
