import axios from 'axios'
import {useEffect, useState} from 'react'

function Stats() {

    const [status, setStatus] = useState('')
    let starships = []
    let populations = []
    const [result, setResult] = useState([])
  
  
  
    function getResult (){
      //// sorting data
      const sorted = [...populations].sort((a,b) => {
        let first = !isNaN(a[1].shipPlanetPopulation) ? a[1].shipPlanetPopulation : 1
        let sec = !isNaN(b[1].shipPlanetPopulation) ? b[1].shipPlanetPopulation : 1
       return  sec - first
      })
      const best = sorted[0]
      let planets = best.slice(2).map((planet) => (
        `${planet.name} - ${planet.population}` 
      ));
      let pilots = best.slice(2).map((pilot) => (
        pilot.data.name 
      ));
      const final = {name: best[0], sum:best[1].shipPlanetPopulation, planets:planets, pilots:pilots }
      console.log(final)
      setResult(final)
  
    }
  
  
    async function  getShipsPilots () {
      setStatus('fetching pilots....')
      const FullList = []
        for (let item of starships) {
        const shipPilots = []
        let shipPlanetPopulation = 0
            for(let pilot of item.pilots) {
              const data = await axios.get(pilot)
              const planet = await axios.get(data.data.homeworld)
              shipPilots.push({data: data.data, name:planet.data.name, population: planet.data.population })
              shipPlanetPopulation += Number(planet.data.population)
            }
        shipPilots.unshift(item.name, {shipPlanetPopulation: shipPlanetPopulation} )
        FullList.push(shipPilots)
        setStatus('Pilots comes, wait....')
      }
       populations = FullList
      setStatus('DONE  !!!!!')
      getResult ()
    }
  
  
  
    useEffect(() => {
      async function fetch(){
        try{
          setStatus('Loading.....')
          let Array = []
          let nextPage = "https://swapi.dev/api/starships/"
          while(nextPage){
            const data = await axios.get(nextPage)
            Array.push(...data.data.results)
            nextPage = data.data.next
          }
          Array = Array.filter(item => item.pilots.length)
          starships = Array
          setStatus(`Starships is READY`)
          getShipsPilots ()
          } catch (e) {console.log(e)}
      }
      fetch()
    },[])
  
  
    return (
      <div className="App">
          { result.name ? (
          <>
              <p>Vehicle name with the largest sum:  <b>{result.name} / {result.sum}</b></p>
              {result.planets.map(item => {
                  return <p key={item}>{item}</p>
              })}
              {result.pilots.map(item => {
                return <p key={item}>{item}</p>
              })}
          </>
          )
          :
          <h1>{status}</h1>
          }
      </div>
    );
  }
  
  export default Stats;
  