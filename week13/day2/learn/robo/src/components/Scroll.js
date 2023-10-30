import React, { Children } from 'react'




export default function Scroll ({children})  {
    return (
        <div style={{overflowY:'scroll', border: '5px solid #000', height:'500px'}}>
            {children}
        </div>
    )
}