import Home from './Components/Home';
import About from './Components/About';
import MyProjects from './Components/MyProjects';
import { Route, Link, Routes, Router } from 'react-router-dom';
import Box from './Box';


import './App.css';

function App() {
  return (
    <>
        <Box/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/myprojects' element={<MyProjects/>}/>

    </Routes>
    </>

  );
}

export default App;
