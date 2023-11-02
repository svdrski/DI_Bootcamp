import logo from './logo.svg';
import './App.css';
import data from './Countries'
import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      suggestions: [],
      text: ''
  }

  // this.controller = this.controller.bind(this)
  }

  controller = (e) => {
    e.preventDefault()
    this.setState({text: e.target.value})
    const results = data.filter(item => item.toLowerCase().startsWith(e.target.value.toLowerCase()))
    this.setState({suggestions: (!e.target.value) ?  [] : results})
    console.log( this.state.suggestions)
  }


  render(){


    return (
      <div className='block'>
        <h2>Auto Completed</h2>
          <input name='search' type='search' className='field' value={this.state.text} onChange={this.controller}/>
          <ul>
          {this.state.suggestions.map( item => (
            <li onClick={() => {this.setState({text: item, suggestions: []})}} >{item}</li>
          )
          )}
          </ul>
         <span className='sug'>Suggestions {this.state.suggestions.length}</span>
      </div>

      );
  }
  
}

export default App;
