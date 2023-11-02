import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {

  constructor(){
    super()
    this.state = {user: '', email: ''}
  }

  changer = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]:e.target.value})
  }

  send = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    let req = await fetch('https://jsonplaceholder.typicode.com/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    req = await req.json()
    console.log(req)
  }

  render(){
    return (
      <form onSubmit={this.send}>
        <input onChange={this.changer} name='user' value={this.state.user} placeholder='name'/>
        <input onChange={this.changer} type='email' value={this.state.email} name='email' placeholder='email'/>
        <input type='submit' value='send'/>
      </form>
    );
  }


}

export default App;
