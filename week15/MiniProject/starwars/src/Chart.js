import axios from "axios"
import { useEffect, useState } from "react"


function Chart () {


    const [planets, setPlanets] = useState ([])
    const task =  ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"]
    let data = []


    function chartController(array) {
        let biggest = 0
        let result = []
        for (let item of array) {
           biggest = Number(item.population) > biggest ? Number(item.population) : biggest
        }
        
        for (let item of array) {
            result.push({name: item.name, population: item.population, height: (Number(item.population)/biggest) * 100})
        }
        setPlanets(result)
        console.log(planets)
    }



    useEffect(()=>{
        async function getData(){
            const planets = await axios.get("https://swapi.dev/api/planets/")
            data = planets.data.results.filter(item => task.includes(item.name))
            chartController(data)
        }
        getData()
    },[])

    return(
        <div className="chart">
            {planets.map(item =>(
                <div className="chartitem">
                <p className="num">{item.population}</p>
                <div className="chartblock" style={{ height: `${item.height}%` }}></div>
                <p>{item.name}</p>

                </div>
            ))}
        </div>

    )
}


export default Chart