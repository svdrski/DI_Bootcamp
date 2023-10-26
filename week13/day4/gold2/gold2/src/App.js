import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [data, setData] =  useState({})
  const [alert, setAlert] = useState('')




  const saver = async (e) => {
    e.preventDefault()
    setData(Object.fromEntries(new FormData(e.target)))
    setAlert('sent')
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      console.log(data);
    }
  }, [data])

  // const saver =  (e) => {
  //   e.preventDefault()
  //   const data = Object.fromEntries(new FormData(e.target))
  //   console.log(data)
  //   setData(data)
  //   setAlert('Sent')
  // }


  return (
    <>
    <h1>New book</h1>
    <form onSubmit={saver}>
      <input name='title' placeholder='title'/>
      <input name='author' placeholder='author'/>
      <input name='genre' placeholder='genre'/>
      <input name='year' placeholder='year'/>
      <input type='submit' value='Input'/>
    </form>
    {alert}
    </>
  );
}

export default App;
