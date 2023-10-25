import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Greeting (props) {

    const [name, setName] = React.useState("World!");
  
    return (
    <>  
     <h1>Hello, {name}</h1>
     <button onClick={()=> {
        setName('EKSBB')
     }}>FFFF</button>
    </>
    )
  }

export default Greeting;