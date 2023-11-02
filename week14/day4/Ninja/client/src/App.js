import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'



class App extends React.Component {

  constructor(props){
    super()
    this.state = {
      users: []
    }
  }


  componentDidMount () {
    axios('http://localhost:3001/users')
    .then(a => this.setState({users:a.data}))
  }


  render(){

    const {users} = this.state
    return (
      this.state.users.length ? 
      <>
      <h1>Users</h1>
      {users.map(item => (
          <li key={item.id}>{item.username}</li>
      ))}
      </>
      :
      <h1>Loading...</h1>
    );
  }

}

export default App;
