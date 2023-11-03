import logo from './logo.svg';
import './App.css';
import React from 'react'
import Heroesarr from './Heroes.json'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      heroes: Heroesarr.superheroes,
      score: 0,
      topscore: 0,
      clicked:[]
    }
  }


  mixer = () =>{
    const array = [... this.state.heroes]
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({heroes: array})
  }

  engine = (index) => {
    if(this.state.clicked.includes(index)) {
      if (this.state.topscore < this.state.score)  {this.setState({topscore: this.state.score})}
      this.setState({score: 0, clicked: []})
      this.mixer()
    } else {
      this.setState({clicked: [...this.state.clicked, index], score: this.state.score +=1})
      this.mixer()
    }
  }



  render(){

    return (
      <>
      <div className='header'>
        <h1>Superheroes Memory Game</h1>
        <div className='flex'>
          <p>Score {this.state.score}</p>
          <p>Top Score {this.state.topscore}</p>
        </div>
      </div>

      <p className='descript' >Get points by clicking on an image but don't click on any more than once!</p>

      <div id='container'>
        {this.state.heroes.map(item => (
          
          <div className='card' onClick={()=>{this.engine(item.id)}}>
            <img src={item.image}/>
            <p>Name: {item.name}</p>
            <p>Occupation: {item.name}</p>
          </div>
        ))}
      </div>
      </>
      );
  }

}

export default App;
