import React from 'react'
import Garage from './Garage' 

class Car extends React.Component {

    constructor(){
        super()
        this.state = {color: "red"}
    }


    render() {
        const {model} = this.props
        return(
        <>
            <h1>This car is {model} color {this.state.color}</h1>
            <Garage size={'Small'}/>

        </>
        )
    }
}

export default Car