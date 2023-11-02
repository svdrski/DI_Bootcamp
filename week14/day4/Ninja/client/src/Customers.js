import axios from 'axios'
import React from 'react'


export default class Customers extends React.Component {


constructor(props){
    super(props)
    this.state = {
        customers : []
    }
}


componentDidMount(){
    axios('http://localhost:3001/api/customers')
    .then(a=> this.setState({customers: a.data}))
}

render(){

    const {customers} = this.state

    return(
        this.state.customers.length ?
        <>
        {customers.map(item => (
            <p>{item.firstName} {item.lastName}</p>
        ))}
        </>

        :
        <p>Loading ....</p>
    )
}

}
