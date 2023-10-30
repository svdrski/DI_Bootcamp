import logo from './logo.svg';
import './App.css';
import {useState} from "react";




function App() {

    const [data, setData] = useState({})

    function  handleChange (e){
        const object = JSON.parse(JSON.stringify(data))
        object[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setData(object)
    }

  return (
      <div id='block'>
          <div id='formblock'>
              <h1>Sample form</h1>
              <form onChange={handleChange}>
                  <input name='firstname' placeholder='firstname'/>
                  <br/>
                  <input name='lastname' placeholder='lastname'/>
                  <br/>
                  <input type='number' name='age' placeholder='age'/>
                  <br/><br/>
                  <label htmlFor='male'>Male</label>
                  <input type='radio' id='male' name='gender' value='male' />
                  <br/>
                  <label htmlFor='female'>Female</label>
                  <input type='radio' id='female' name='gender' value='female' />

                  <h4>Select your destination</h4>
                  <select name='destination' defaultValue='def' >
                      <option value='def'>Please choose destination</option>
                      <option name='England' value='England'>England</option>
                      <option name='Usa' value='Usa'>Usa</option>
                      <option name='France' value='France'>France</option>
                  </select>

                  <h4>Dietary restrictions:</h4>
                      <label htmlFor='nuts'>Nuts free</label>
                      <input type="checkbox" name='nuts'/>
                           <br/>
                      <label htmlFor='lactose'>Lactose free</label>
                      <input type="checkbox" name='lactose' />
                            <br/>
                      <label htmlFor='vegan'>Vegan free</label>
                      <input type="checkbox" name='vegan'/>
                              <br/><br/>
                  <input type='submit' value='submit'/>
              </form>
          </div>
          <hr/>
          <div id='content'>
              <h3>Entered information:</h3>
              <p>Your name: {data.firstname}</p>
              <p>Your name: {data.lastname}</p>
              <p>Your age: {data.age}</p>
              <p>Your gender: {data.gender}</p>
              <p>Your destination: {data.destination}</p>
              <p>Your dietary: restrictions:</p>
              <ul>
                  <li>**Nuts free: {data.nuts ? 'Yes' : 'No'}</li>
                  <li>**Lactose free: {data.lactose ? 'Yes' : 'No'}</li>
                  <li>**Vegan free: {data.vegan ? 'Yes' : 'No'}</li>
              </ul>

          </div>

      </div>
  );
}

export default App;
