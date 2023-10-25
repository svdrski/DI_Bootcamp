import React from 'react'

const SearchBox = ({action}) => {

    return(
        <input type='search' placeholder='Search Robots' onChange={action}></input> 
    )
}

export default SearchBox