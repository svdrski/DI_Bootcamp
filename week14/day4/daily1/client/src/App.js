import logo from './logo.svg';
import './App.css';
import React from 'react'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      response: null
    }

    this.form = this.form.bind(this);

  }

  async getData() {
    let data =  await fetch('http://localhost:3333/api/hello')
    data = await data.json()
    this.setState({hello:data})
  }

  async form (e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    let req = await fetch('http://localhost:3333/api/world',{
      headers:{'Content-Type':'application/json'},
      method: 'POST',
      body:JSON.stringify(data)
    })
    req = await req.json()
    console.log(req)
    this.setState({response:req})
  }


  componentDidMount() {
    this.getData()
  }


render(){
  return (
    <>
    <h2>{this.state.hello}</h2>
    <h3>Post to server</h3>
    <form onSubmit={this.form}>
      <input name='value'></input>
      <input type='submit' value='send'/>
    </form>
    <p>{this.state.response}</p>
    </>
  );
}

}

export default App;
