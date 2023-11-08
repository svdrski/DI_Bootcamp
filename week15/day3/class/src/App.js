import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Display from './Components/Display';
import Action from './Components/Action';



function App() {


  const [count, setCount] = useState(0)


  return (
        <>
        <Display value={count}/>
        <Action count={count} value={setCount}/>
        </>
  );
}

export default App;
