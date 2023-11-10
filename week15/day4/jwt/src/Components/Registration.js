import { useContext } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "../App"
import axios from "axios"


export default function Registration (){
    
    const {message, setMessage} = useContext(Context)
    const navigate = useNavigate();


    const registr = async (e) => {
        e.preventDefault()

        try{
            setMessage('')
            const data = Object.fromEntries(new FormData(e.target))
            const req = await axios.post('http://localhost:3333/reg', data, {headers: {"Contet-Type" : "application/json"}, withCredentials: true})
            if(req.data === 23505) {
                setMessage('User with this email already exist')
            return
            }
            const token = req.data
            localStorage.setItem('key', JSON.stringify(token))
            navigate('/dashboard')
        } catch(e) {console.log(e)}

    }



    return(
        <div className='Content'>
        <h1>Register</h1>
        <Link to='/login'>Login</Link>
          <form onSubmit={registr}>
            <input placeholder='name' name='name'/>
            <input placeholder='email' type='email' name='email'/>
            <input placeholder='password' type='password' name='password'/>
            <input type='submit' value='Register'/>
          </form>
  
          <p>{message}</p>
      </div>
    )
}