export default function Button({value, count}){
    return(
        <button onClick={()=>{value(count + 1)}}> PLUS </button>
    )
}