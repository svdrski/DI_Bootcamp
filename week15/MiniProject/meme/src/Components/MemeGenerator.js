import {useEffect, useState} from 'react'
import axios from 'axios'

export default function MemeGenerator (){

    const [data, setData] = useState({top:"", bottom:"", img:'http://i.imgflip.com/1bij.jpg'})
    const [allMemeImgs, setAllMemeImgs] = useState([])



    useEffect( ()=>{
        async function getData (){
            const data =  await axios.get('https://api.imgflip.com/get_memes')
            console.log(data.data.data.memes)
            setAllMemeImgs(data.data.data.memes)

        }
        getData()

    },[] )



    function changer (e){
        setData({...data, [e.target.name]:e.target.value})
    }

    function imager (e){
        e.preventDefault()
        setData({...data, img: allMemeImgs[Math.floor(Math.random() * 100)].url})
    }

    return(
        <>
        <form className='meme-form'>
                <input type='text' placeholder='Top text' onChange={changer} name='top'/>
                <input type='text' placeholder='Bottom text' onChange={changer} name='bottom'/>
                <button onClick={imager}>GEN</button>
        </form>

        <div className='meme'>
            <img src={data.img}/>
            <h2 className='top'>{data.top}</h2>
            <h2 className='bottom'>{data.bottom}</h2>
        </div>




        </>
    )

}