import React from 'react'

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {users: [{name: 'AAAA'}]}
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(a=>a.json()).then(a=> {
           this.setState({users: a})
        })
    }

  




    render (){
        const data = this.state.users.map((item) => (
            <p>{item.name}</p>
            ))

        return <p>{data}</p>
    }
}

export default Users