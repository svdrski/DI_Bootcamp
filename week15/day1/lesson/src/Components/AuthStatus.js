import { useContext } from "react";
import { CheckLog } from "../App";

function AuthStatus (){

const {user, setUser} = useContext(CheckLog)
console.log(user)

return(
    user.name && user.email ?
    <h1>{user.name} {user.email}</h1>
    :
    <button onClick={()=>{setUser({name: "Loh", email:'Fsfsfsf@mail.com'})}}>Login</button>
)

}


export default AuthStatus