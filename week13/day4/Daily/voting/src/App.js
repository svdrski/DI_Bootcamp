import logo from './logo.svg';
import './App.css';
import { useState } from "react"



function App() {
  
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const vote = (e) => {
    const arr = [...languages]
    arr.find(item => { return item.name === e.target.name}).votes +=1
    setLanguages(arr)
  }


  return (
   <>
   {languages.map(item =>(
    <div className='block'>
      <p>{item.votes}</p>
      <p>{item.name}</p>
      <button name={item.name} onClick={vote}>Vote</button>
    </div>
   ))}
   </>
  );
}

export default App;
