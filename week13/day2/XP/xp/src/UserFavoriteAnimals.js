import React from 'react'

class UserFavoriteAnimals extends React.Component {
    render(){
        const {array} = this.props
        return (
            <ul>
                { array.favAnimals.map(item => (
                <li>{item}</li>
                ))} 
            </ul>
           
        )
    }
}

export default UserFavoriteAnimals