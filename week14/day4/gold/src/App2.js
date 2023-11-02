import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios';


class App2 extends React.Component {

  constructor(){
    super()
    this.state = {userId: '', title: '', body: ''}
  }

  changer = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]:e.target.value})
  }

  send = async (e) => {
    e.preventDefault()
    let data = (Object.fromEntries(new FormData(e.target)))
     axios.post(`https://jsonplaceholder.typicode.com/users/`, {data})
    .then(a=>console.log(a.data.data))
 
  }

  render(){
    return (
      <form onSubmit={this.send}>
        <input onChange={this.changer} name='userId' value={this.state.userId} placeholder='userId'/>
        <input onChange={this.changer} name='title' value={this.state.title} placeholder='title'/>
        <input onChange={this.changer} name='body' value={this.state.body} placeholder='body'/>
        <input type='submit' value='send'/>
      </form>
    );
  }


}

export default App2;
