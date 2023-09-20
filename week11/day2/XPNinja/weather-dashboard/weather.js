import axios from "axios";
import chalk from "chalk";
import prompts from 'prompts'

 export  function getWeather (city) {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
     .then(a => getResp(a.data[0].lat, a.data[0].lon))
             function getResp  (lat,lon){
                 axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`)
               .then(a => console.log(`Temperature in ${city} ${chalk.blue(a.data.main.temp)} C`))
            }
}
   



