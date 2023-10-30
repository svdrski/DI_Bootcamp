import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            error: false
        }
    }


    static getDer

    componentDidCatch(err, errorInfo) {
        this.setState({error: err, errorInfo: errorInfo})
    }


    render() {

        if(this.state.error !== false) {
            return(
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
            )
        }

        return this.props.children
    }
}
export default ErrorBoundary