import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'


export default function Favorites (){

    const items = JSON.parse(localStorage.getItem('list'))
    const [weatherList, setWeatherList] = useState([])

    useEffect(()=>{
        try{
            const data = async()=>{
                const list = []
                for(let item of items) {
                   const value = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${item.key}?apikey=fE85uWOWGrYpzBG4L3jiwCR2DtDK9f6e&metric=true`)
                   list.push(...value.data.DailyForecasts)
                }
                setWeatherList(list)
            }
            data()
        } catch(e) {console.log(e)}
    },[])


    return(
        <div className="favorites">
                <h1> Favorites</h1>
                {weatherList.length > 0 ? 
                        <>
                        {weatherList.map((item, index) => (
                            <Link key={index}  to={`/${items[index].name}`} className="card fav" >
                                <p>{items[index].name}</p>
                                <div className="first">
                                    <h1 className="tempers"> {item.Temperature.Maximum.Value}</h1>
                                    <p className="units">{item.Temperature.Maximum.Unit}</p>
                                </div>
                            <p className="status"> {item.Day.IconPhrase}</p>
                            </Link>  
                            ))}
                         </>
                 : 
                <h1>Loading</h1>
            }   
        </div>
    )
}