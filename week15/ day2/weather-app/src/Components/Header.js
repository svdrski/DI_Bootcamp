import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default function Header () {


    return(
        <div className='header'>
            <span>
                <h3>Weather App</h3>
            </span>

            <nav>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='favorites'>Favorites</Link>
            </nav>
        </div>
    )
}