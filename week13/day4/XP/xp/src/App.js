import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import React from 'react';


const carinfo = {name: "Ford", model: "Mustang"};



class App extends React.Component {



  render(){
    return (
      <Car model={"Ford"}/>
  
    );
  }

}

export default App;
