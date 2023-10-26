import { useEffect, useState } from "react";

function Color () {
    const [favoriteColor, setfavoriteColor] = useState('red')


    const changeColor = () => {
        setfavoriteColor('Blue')
    }

    useEffect(()=> {
        // setfavoriteColor('Yellow')
        alert('useEffect reached')
    }, [])



    return (
        <>
        <h1>My favorite color is {favoriteColor}</h1>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Color