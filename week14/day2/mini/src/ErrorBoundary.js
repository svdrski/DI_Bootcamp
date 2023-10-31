import React from 'react'


export default class ErrorBoundary extends React.Component {

    constructor (props){

        super(props)
        this.state = {
            error: false,
            info: ''
        }
    }



    componentDidCatch(err, inf) {
        this.setState({error: err, errorInfo: inf})
    }


    componentDidUpdate(){
        console.log(this.state)
    }


    render () {
        return(
            this.state.error ? 
            <div className="card my-5">
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
             : this.props.children
        )
    }
}