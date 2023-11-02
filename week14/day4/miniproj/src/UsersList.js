import React from 'react'


class UsersList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users: [],
            isloaded: false
        }
        
    }


    componentDidMount(){

        setTimeout(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(a => a.json()).then(a => {this.setState({users: a})}).then(this.setState({isloaded: true}))
        }, 100)
   
    }

    render(){
        const {users} = this.state

        return(

            this.state.isloaded ? 
            <>
            <h1>List of users</h1>
            {users.map(item => (
                <div className='block'>
                    <p>ID: <span>{item.id}</span></p>
                    <p>Name: <span>{item.name}</span></p>
                    <p>Username: <span>{item.username}</span></p>
                    <p>Email: <span>{item.email}</span></p>
                    <p>City: <span>{item.city}</span></p>

                 </div>
            ))}
            </>

            :

            <p>Loading…</p>

        )
    }
}




export default UsersList