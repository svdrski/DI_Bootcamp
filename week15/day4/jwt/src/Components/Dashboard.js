import { useEffect, useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { cookies } from '../App';



export default function Dashboard (){

    const navigator = useNavigate()
    const [userdata, setUserdata] = useState({})
  



    async function data () {
    //   const key = JSON.parse(localStorage.getItem('key'))

    const token = cookies.get('token');

      try{
        const userData = await axios.get('http://localhost:3333/dashboard', { headers: {"Authorization" : `${token}`}, withCredentials: true } )
        setUserdata(userData.data[0])
      } catch(e) {navigator('/login')}
  
    }


    async function logout(){
        localStorage.clear()
        cookies.remove();
        await axios.get('http://localhost:3333/logout', {withCredentials: true})
        navigator('/login')
    }
  



    useEffect(()=>{
        data()
    },[])



    return(
      <>
      <h1>{userdata.name}</h1>
      <p>{userdata.email}</p>
      <p>ID: {userdata.id}</p>
      <button onClick={logout}>LOG OUT</button>
      </>
    )
  }