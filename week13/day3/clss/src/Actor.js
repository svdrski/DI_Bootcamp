import React from 'react'

class Actor extends React.Component{
    constructor(props){
        super(props)
        this.state = {firstName: "Hleb", LastName: "Svidzerski", url:'IMGG'}
    }

    update = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        this.setState(data)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.update}>
                    <input name='firstName'></input>
                    <input name='LastName'></input>
                    <input name='url'></input>
                    <input type='submit' value='Submit'/>
                </form>
             <h1>{this.state.firstName} {this.state.LastName} {this.state.url}</h1>
            </div>
        )
    }
}

export default Actor