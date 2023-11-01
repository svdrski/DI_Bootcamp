import React from 'react'



export default class ErrorBoundary extends React.Component {

    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    componentDidCatch(error, info){
        console.log('sss')
        console.log(error)
        this.setState({hasError: true, err: error})
    }


    render() {
        return (
             this.state.hasError ? <h1>Errorrrrr {this.state.err.toString()}</h1> : this.props.children
        );
    }
}