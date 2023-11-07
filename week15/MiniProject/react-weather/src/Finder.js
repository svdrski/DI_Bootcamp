import {useState} from 'react'
import axios from 'axios'

export default function Finder (){
    
    const [data, setData] = useState({})



    async function find(e){
        e.preventDefault()
        try{
            if (e.target.city.value.length) {
            const location = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${e.target.city.value}&limit=5&appid=${process.env.REACT_APP_KEY}`)
            const Weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.data[0].lat}&lon=${location.data[0].lon}&appid=${process.env.REACT_APP_KEY}`)
            setData(Weather.data)
            } else {alert('please enter a valid values.')}
            
        } catch (e) {console.log(e)}

    }



    return(
        <div className='container'>
            <h1>Weather Finder</h1>
            <p>Find out temperature, conditions and more...</p>
            <form onSubmit={find}>
                  <input className='city' name='city'/>
                  <input type='submit'/>
            </form>

            { data.name ? 
                <div className='content'>
                <h2>Location:  {data.name}, {data.sys.country}</h2>
                <h2>Temperature:  {data.main.temp}</h2>
                <h2>Humidity:  {data.main.humidity}</h2>
                <h2>Condition:  {data.weather[0].description}</h2>
                </div>
             : <h5>Hello</h5>
            }
        </div>
    )
}