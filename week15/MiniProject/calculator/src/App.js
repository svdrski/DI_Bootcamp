import logo from './logo.svg';
import './App.css';
import{useState} from 'react'

function App() {

  const opers = ['+','-', '*', '.', '/']


  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  function clear (){
    setInput('')
    setResult('')
  }

  function calc (e){
      if((input === '' || opers.includes(input[input.length - 1]) || input.includes('=')) && opers.includes(e.target.value)){
        return
      } else if (!opers.includes(e.target.value)){
        setResult(result + e.target.value)
      } else if(opers.includes(input[input.length - 1 ])){
        setResult(e.target.value)
      }
      setInput(input + e.target.value)
    }


  function getresult(){
    if (input.includes('=') || input.length === 0 || opers.includes(input[input.length - 1])) {
      return;
    }
    setInput(input + ' = ' + eval(input))
    setResult(eval(input))
  }


  return (
    <div className='container'>
    <div className='box'>
      <div id="display">
          <p className='input'>{input}</p>
          <p className='result'>{result}</p>
      </div>
      <button value='clear' onClick={clear} id='clear'>AC</button>
      <button value='/' onClick={calc} id='/'>÷</button>
      <button value='*' onClick={calc} id='multiply'>×</button>
      <button value='7' onClick={calc} id='seven'>7</button>
      <button value='8' onClick={calc} id='eight'>8</button>
      <button value='9' onClick={calc} id='nine'>9</button>
      <button value='-' onClick={calc} id='suvstract'>-</button>
      <button value='4' onClick={calc} id='four'>4</button>
      <button value='5' onClick={calc} id='five'>5</button>
      <button value='6' onClick={calc} id='six'>6</button>
      <button value='+' onClick={calc} id='plus'>+</button>
      <button value='1' onClick={calc} id='one'>1</button>
      <button value='2' onClick={calc} id='two'>2</button>
      <button value='3' onClick={calc} id='three'>3</button>
      <button value='=' onClick={getresult} id='equals'>=</button>
      <button value='0' onClick={calc} id='zero'>0</button>
      <button value='.' onClick={calc} id='dot'>.</button>
    </div>
    </div>
  );
}

export default App;
