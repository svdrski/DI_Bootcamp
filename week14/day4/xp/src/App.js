import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import ShopScreen from './Components/ShopScreen';
import ErrorBoundary from './Components/ErrorBoundary';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';


import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'


function App() {


  async function webhook () {
    let data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }

     let response = await fetch('https://webhook.site/f7257019-b14b-4573-8372-471b43dc74ef', {
      method: 'POST',
      body: JSON.stringify(data)
     })
     console.log(response)
  }



  return (
    <>
    
    <BrowserRouter>
    <ul className="nav nav-pills">
        <li className="nav-item">
        <NavLink className='nav-link' to="/">Home</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className='nav-link' to="/profile">Profile</NavLink>
          </li>
        <li className="nav-item">
        <NavLink  className='nav-link' to="/shop">Shop</NavLink>
        </li>
    </ul>

    <Routes>
      <Route path='/' element={<ErrorBoundary><HomeScreen/></ErrorBoundary>}/>
      <Route path='/profile' element={<ErrorBoundary><ProfileScreen/></ErrorBoundary>}/>
      <Route path='/shop' element={<ErrorBoundary><ShopScreen/></ErrorBoundary>}/>
    </Routes>

    </BrowserRouter>

    <PostList/>
    <Example1/>
    <Example2/>
    <Example3/>


    <button onClick={webhook}>Click</button>
    </>


  );
}

export default App;
