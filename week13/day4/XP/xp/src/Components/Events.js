import { useState } from "react"

function Events () {

    const [isToggleOn, setToggle] = useState(true)
    

    const clickMe = () => {
        alert('I was clicked')
    }

    const handleKeyDown = (e) => {
             e.keyCode === 13 && alert(`Enter was pressed your input - ${e.target.value}`)
        }

    const Toggle = () => {
        setToggle(isToggleOn ? false : true)
    }

    return(
        <>
                <input onKeyDown={handleKeyDown}/>
                <button onClick={clickMe}>Click</button>
                <button onClick={Toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    )
}

export default Events