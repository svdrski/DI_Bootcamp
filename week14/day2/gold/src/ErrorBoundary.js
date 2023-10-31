import React from 'react'
import Modal from './Modal'


export default class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
        this.occurError = this.occurError.bind(this);

        
    }


    occurError(){
        const {funcerror} = this.props
        funcerror('')
        this.setState({hasError: false})
      
    }

    componentDidCatch(err, info){
        this.setState({hasError: true, error: err, errorInfo: info})
    }

    render() {
        return this.state.hasError ? <Modal errors={this.state} clear={this.occurError} /> : this.props.children
    }

}