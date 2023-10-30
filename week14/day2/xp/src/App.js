import logo from './logo.svg';
import './App.css';
import React from 'react'
import ErrorBoundary from './ErrorBoundary';




class BuggyCounter extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  handleClick = () => {
    let {counter} = this.state
     counter +=1
     this.setState({counter})
   }

  render() {
    if(this.state.counter === 5) {  throw new Error('I crashed!')}
    return(
      <h1 onClick={this.handleClick}>{this.state.counter}</h1>
    )
  }
}


class App extends React.Component {
  render(){
    return(
      <>
      <h3>Click on the numbers to increase the counters.
            The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
      </h3>
      <hr/>
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <ErrorBoundary>
            <BuggyCounter/>
            <BuggyCounter/>
        </ErrorBoundary>

        <hr/>
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary>
            <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
            <BuggyCounter/>
        </ErrorBoundary>
        <hr/>
        <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>

        <BuggyCounter/>

      </>

    )

  }
}



export default App;
