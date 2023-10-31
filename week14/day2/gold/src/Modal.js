import React from 'react'


export default class Modal extends React.Component {


    render(){
        const { error, errorInfo} = this.props.errors
        const {clear} = this.props
 

        
        return(
            <div className='modal-background'>
                
                <div className='modal-body'>
                    <p>Error: Something went wrong!</p>
                        <details style={{ whiteSpace: 'pre-wrap' }}>
                            {error && error.toString()}
                            <br />
                            {errorInfo.componentStack}
                        </details>
                        <button onClick={clear}>Close</button>
                </div>
            </div>
        )
    }
}