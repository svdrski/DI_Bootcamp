import React from 'react'
import Card from './Card'


const CardList = ({Robots}) => {

    const cardComponent = Robots.map(item =>(
        <Card key={item.id}  id={item.id} name={item.name} email={item.email}/>
      ))

    return(
        cardComponent
    )
}

export default CardList