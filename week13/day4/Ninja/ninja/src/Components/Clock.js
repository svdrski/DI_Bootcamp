import {useState, useEffect} from 'react'

export default function Clock (){

    const [currentDate, setcurrentDate] = useState()

    function tick(){
        setcurrentDate(new Date().toLocaleTimeString())
    }

    useEffect(()=>{
        setInterval(() => {
            tick()
        }, 1000);
    },[currentDate])


    return (
        <>
        <h1>Time</h1>
        <p>It is {currentDate}</p>
        </>
    )
}