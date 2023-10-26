import { useState } from "react"

function Forms () {

    const [username, setUsername] = useState('')
    const [age, setUserage] = useState(null)
    const [errormessage, setErrormessage] = useState('')
    const [content, setContent] = useState('TENCKnvidnvindsbvnosdno dinisd diggisdhgid sdigisdhgihsdi idig')
    const [selected, setSelected] = useState('Volvo')

    let header = ''

    const setValue = (e) => {
        e.target.name === "name" ? setUsername(e.target.value) : setUserage(e.target.value)
    }

    if(username) {
      header = <h1>Hello {username} {age}</h1>
    }

    const mySubmitHandler = (e) =>{
        e.preventDefault()
        setErrormessage( !isNaN(parseFloat(e.target.age.value)) ? `You are submitting ${e.target.name.value} ${e.target.age.value}` : 'Age must be a number')
    }

    const changeSelect = (e) => {
        setSelected(e.target.value)
    }


    return(
        <>
        {header}
        <form onSubmit={mySubmitHandler}>
            <label htmlFor="name">Enter your name</label>
            <input name="name" placeholder="name" onChange={setValue}></input>
            <input name='age' placeholder="age" onChange={setValue}></input>
            <textarea value={content}></textarea>
            <input type="submit" value='submit'/>

            <select value={selected} onChange={changeSelect}>
                <option value='ford'>ford</option>
                <option value='Volvo'>Volvo</option>
                <option value='Fiat'>Fiat</option>
            </select>
            {errormessage}
        </form>

        </>
    )
}

export default  Forms