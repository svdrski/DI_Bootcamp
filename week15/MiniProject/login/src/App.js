import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Registration from './Components/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import Login from './Components/Login';


export const Context = createContext()


function Dashboard (){
  return(
    <h1>Dashboard</h1>
  )
}

function App() {

const [message, setMessage] = useState('fff')

  
  return (
    <Context.Provider value={{message, setMessage}}>
    <BrowserRouter>

    <Routes>
      <Route path='/registration' Component={Registration}/>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/login' Component={Login}/>
    </Routes>
    
   </BrowserRouter>
   </Context.Provider>

  );
}

export default App;
