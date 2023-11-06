import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {Route, useParams, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';

function App() {
  return (
    <>
           <Header/>

    <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/:searchcity' element={<Home/>}/>
       <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
    </>
  );
}

export default App;
