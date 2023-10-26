import { useEffect, useState } from 'react'
import './App.css'

export default function Form () {


    const [data, setData] = useState('')


    const saver = (e) => {
        e.preventDefault()
        setData(Object.fromEntries(new FormData(e.target)))
    }

    const form = (
        <>
        <h1>Welcome</h1>
        <p>Please provide your information below</p>
         <form onSubmit={saver}>
         <input name='firstName' placeholder='firstName'/>
         <input name='lastName' placeholder='lastName'/>
         <input name='phone' placeholder='phone'/>
         <input name='email' placeholder='email'/>
         <input type='submit' value='Input'/>
       </form>
       </>
    )

    const  values = (
        <>
            <p>{data.firstName}, {data.lastName}</p>
            <p>{data.phone} | {data.email}</p>
            <button onClick={()=>{setData('')}}>Reset</button>
        </>
    )



    return(
        
        <div className='block'> 
        {data ? values : form}
       </div>
    )
}