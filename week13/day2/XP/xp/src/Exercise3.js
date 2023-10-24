import React from 'react'
import logo from './logo.svg';
import './Exercise.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends React.Component{
    render() {
        return(
            <div className=' flex flex-column items-center '>
                 <h1 style={style_header} >Header</h1>
                <p className='para'>Paragraph</p>
                <a href=''>Link</a>
                <form>
                    <label htmlFor='name'>Enter your name</label>
                    <input type='text' name='name'></input>
                    <input type='submit' value='submit'></input>
                </form>

                <img src={logo}/>

                <ul>
                    <li>Coffe</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        )
    }
}

export default Exercise