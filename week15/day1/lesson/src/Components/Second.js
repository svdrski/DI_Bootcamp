import React, { useContext } from 'react'
import { HlebContext } from '../App'

export default function Second() {
    
    const data = useContext(HlebContext)


    return(
        <h1>Name is {data}</h1>
    )
}