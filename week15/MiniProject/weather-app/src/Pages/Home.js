import { useEffect, useState } from "react"
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios'
import Mainblock from "../Components/Mainblock"
import Card from "../Components/Card"
import Search from "../Components/Search"
const apikey = 'fE85uWOWGrYpzBG4L3jiwCR2DtDK9f6e'

export default function Home (props){

    let { searchcity } = useParams();
    
    const [searchValue, setsearchValue] = useState('')
    const [city, setCity] = useState(searchcity ? searchcity : 'Tel Aviv' );
    const [cityData, setCityData] = useState([])
    const [defaultw, setDefaultw] = useState([])
    const [searchValues, setSearchValues] = useState([])
    const helper = document.getElementById('searchhelp')


    const find = (e) => {
        try{
            e.key === 'Enter' && gosearch(searchValue);
            (e.keyCode  === 8 && searchValue.length === 0) && (helper.style.display = 'none')
        } catch(e) {console.log(e)}
    }

    async function gosearch (value) {
        try{
            const data = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${value}`)
            if(data.data.length){
            setCityData(data.data)
            setsearchValue('')
            if (helper) {helper.style.display = 'none'}
            } else {
                document.getElementById('error').style.display = 'block'
                helper.style.display = 'none'
            }
        } catch(e) {console.log(e)}
    }

    async function getWeather (key) {
        try{
            const data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apikey}&metric=true`)
            setDefaultw(data.data.DailyForecasts)
        } catch(e) {console.log(e)}
    }

    async function searchlist (e) {
        try{
            document.getElementById('error').style.display = 'none'
            setsearchValue(e.target.value)
            const data = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${searchValue}`)
            if(data.data.length){
                setSearchValues(data.data != null ? data.data : [])
                helper.style.display = data.data != null ? 'block' : 'none'
            } else {
                setSearchValues([])
                helper.style.display = 'none'
            }
        } catch(e) {console.log(e)}
   
    }



    useEffect( ()=>{
        gosearch(city)
    },[])


    useEffect(()=>{
       if(cityData.length) {
        getWeather(cityData[0].Key)
        }
    },[cityData])


    return(
        <>
            <Search find={find} searchValue={searchValue} searchlist={searchlist} searchValues={searchValues} gosearch={gosearch}/>
            <Mainblock defaultw={defaultw} cityData={cityData}/>
            <div className="cardlist">
                {defaultw.map(item => (
                    <Card key={Math.floor(Math.random() * 44)} defaultw={item}/>
                ))}
            </div>
        </>
    )
}