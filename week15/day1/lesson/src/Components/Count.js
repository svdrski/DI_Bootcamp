import { useContext } from "react"
import { MyContext } from "../App"



export default function Count (){

    const {count, plus} = useContext(MyContext)



    return(
        <>
                <p>{count}</p>
        <button onClick={plus}>+</button>
        </>

    )
}