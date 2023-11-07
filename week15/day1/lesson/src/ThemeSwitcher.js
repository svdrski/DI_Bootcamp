import { useContext } from "react";
import { Switcher } from "./App";

export default function ThemeSwitcher (){

    const {theme, setTheme} = useContext(Switcher)


    function change (){
        setTheme(theme === 'white' ? 'black' : 'white')
        document.body.style.backgroundColor = theme === 'white' ? '#000' : '#fff'
    }
    

    return(
        <>
        <p>{theme}</p>
        <button onClick={change}>Change</button>
        </>

    )
}