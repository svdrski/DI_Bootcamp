import React from 'react'
import { useContext } from 'react'
import userContext from './UserContext'


function Cars (){
    const data = useContext(userContext);


    return(
        <p>{data.name}</p>
    )
}


export default Cars