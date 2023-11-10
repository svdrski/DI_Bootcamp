import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Registration from './Components/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import Login from './Components/Login';
import axios from 'axios';
import Dashboard from './Components/Dashboard';
import Cookies from 'universal-cookie';



export const Context = createContext()
export const cookies = new Cookies();




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
