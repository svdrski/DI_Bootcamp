import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {

  const [result, setResult] = useState('')


  function calculate(e) {
    e.preventDefault()
    const{input1, select, input2} = e.target
    const sum =  
    setResult(eval(`${input1.value || 0} ${select.value} ${input2.value || 0}`))
  }


  return (
    <div className='box'>
      <h1>Adding two numbers</h1>

      <form onSubmit={calculate}>
        <div>
        <input className='input' name='input1' type='number'/>
        <select className='input' name='select'>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>
        </select>
        <input className='input' name='input2' type='number'/>
        </div>
        <input className='btn' type='submit' value='Add Them !'/>
      </form>

      <p className='result'>{result}</p>
    </div>
  );
}

export default App;
