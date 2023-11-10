import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'



let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let player1 = []
let player2 = []
let gameStaus = true
let gameMode = true


function App() {
  const [currentPlayer, changePlayer] = useState ('╳')
  const [map, setMap] = useState(['','','','','','','','',''])
  const [message, setMessage] = useState('')

  
  const emptyCells = map.reduce((acc, item, index) => {
    if (item.length === 0)
    {acc.push(index)}
    return acc
  }, [])



  function mode (){
    gameMode = !gameMode
    reset()
  }

  function ai (){

    let matchingPatterns = [];
    let enemyPatterns = []
    for (let pattern of patterns) {
      const matchingItems2 = pattern.filter(item => player2.includes(item));
      const matchingItems1 = pattern.filter(item => player1.includes(item));
      if (matchingItems2.length > 0 && matchingItems1.length === 0) {
        matchingPatterns.push(pattern);
      }

      if(matchingItems1.length > 0) {
        enemyPatterns.push(pattern)
      }
    }
    if (matchingPatterns.length > 0) {
      const value = matchingPatterns[0].find(item => emptyCells.includes(item))
      let enemyValue =  enemyPatterns.filter(enemyArray => !enemyArray.some(item => player2.includes(item)))
      const value2 = enemyValue[0].find(item => emptyCells.includes(item))
      return value
    }
    return (emptyCells.find(item => !player1.includes(item)))
  }


  function reset (){
    player1 = []
    player2 = []
    setMap(['','','','','','','','',''])
    gameStaus = true
    setMessage('')
  }


  function checker(player) {
    if (player1.length + player2.length === 9) {
      setMessage( `DRAW` )
      gameStaus = false
      return}

    for (let pattern of patterns) {
      if (pattern.every(item => player.includes(item))){
        setMessage(player === player2 ? '◯ WINNER'  :  '╳ WINNER' )
        gameStaus = false
        }
    }

  }


  async function controlller (e){
    if(!gameStaus) {return}
        const cell = Number(e.target.id)
        if(map[e.target.id ].length) return

        let newmap = [...map]
        newmap[e.target.id] = currentPlayer

        //update player story
        if (currentPlayer === '╳') {
          player1.push(cell)
          checker(player1)
        } else {
          player2.push(cell)
          checker(player2)
        } 

        if (gameMode) {
          const go = await ai(newmap);
          console.log(go)
          player2.push(go)
          setMap([...newmap.slice(0, go), '◯', ...newmap.slice(go + 1)]);
          checker(player2)
        } else {
         setMap(newmap)
         changePlayer(currentPlayer === '◯' ? '╳' : '◯')
        }
  }


  useEffect(()=>{
    // ai()
  }, [map])




  return (
   <div className='container'>
    <h1>REACT TIC TAC TOE </h1>
    <button onClick={mode}>Switch mode</button>
    <button onClick={reset}>RESET</button>
    <p>{currentPlayer} turn</p>

    <div className='field'>

      <div className='row'>
        <div className='col' id='0' onClick={controlller}>{map[0]}</div>
        <div className='col' id='1' onClick={controlller}>{map[1]}</div>
        <div className='col' id='2' onClick={controlller}>{map[2]}</div>
      </div>
      
      <div className='row'>
        <div className='col' id='3' onClick={controlller}>{map[3]}</div>
        <div className='col' id='4' onClick={controlller}>{map[4]}</div>
        <div className='col' id='5' onClick={controlller}>{map[5]}</div>
      </div>

      <div className='row'>
        <div className='col' id='6' onClick={controlller}>{map[6]}</div>
        <div className='col' id='7' onClick={controlller}>{map[7]}</div>
        <div className='col' id='8' onClick={controlller}>{map[8]}</div>
      </div>
      
    </div>

    <p>{message}</p>
   </div>
  );
}

export default App;
