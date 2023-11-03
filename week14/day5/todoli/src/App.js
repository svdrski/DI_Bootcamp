import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {


  const [list, setList] = useState([])
  const [value, setValue] = useState('')



  const addtask = (e) => {
    let data
    if (e.key === 'Enter')  {
      data = [...list, e.target.value]
      setList(data)
      setValue('')
    }
  }

  const del = (index) => {
    const tasks = [...list]
    tasks.splice(index, 1)
    setList(tasks)
    }


  return (
    <div className="App">
      <h1>Todo's</h1>
      {list.map((item, ind) =>(
        <span key={uuidv4()} className='task' onClick={()=>{del(ind)}}>{item}</span>
      ))}
      <span className='add'>Add new todo:</span>
      <input type='text' value={value}  onChange={(e) => {setValue(e.target.value)}} onKeyPress={addtask}/>
    </div>
  );
}

export default App;
