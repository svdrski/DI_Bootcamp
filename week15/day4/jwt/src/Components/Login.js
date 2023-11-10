import { useContext } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../App"
import axios from "axios"
import Cookies from 'universal-cookie';

export const cookies = new Cookies();


export default function Login (){
    
    const {message, setMessage} = useContext(Context)
    const navigate = useNavigate();


    const login = async (e) => {
        e.preventDefault()


        try{
            setMessage('')
            const data = Object.fromEntries(new FormData(e.target))
            const req = await axios.post('http://localhost:3333/login', data, {
                headers: {"Contet-Type" : "application/json"},
                withCredentials: true
            })
            if(req.data === 'not found') {
                setMessage('User with this email does not exist')
            return
            }
            if(req.data === 'wrong password') {
                setMessage('Wrong password')
            return
            }
            // localStorage.setItem('key', JSON.stringify(token))
            navigate('/dashboard')
        } catch(e) {console.log(e)}

    }



    return(
        <div className='Content'>
        <h1>Login</h1>
        <Link to='/registration'>Registration</Link>
          <form onSubmit={login}>
            <input placeholder='email' type='email' name='email'/>
            <input placeholder='password' type='password' name='password'/>
            <input type='submit' value='Login'/>
          </form>
  
          <p>{message}</p>
      </div>
    )
}