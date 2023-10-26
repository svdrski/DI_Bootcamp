import { useEffect, useState } from "react"

export default function Form () {


    const [phoneError, setphoneError ] = useState('')
    const [emailError, setemailError] = useState('')


    function focusing (e){
        e.target.style.border = '1px solid green'
    }

    function bluring (e) {
        if(e.target.name === ('phone' && phoneError) || ('email' && emailError)){return}
        if(e.target.value === ''){return e.target.style.border = '1px solid red' }
        e.target.style.border = '1px solid grey'
    }

    function checkerPhone (e){
        e.preventDefault()
        if (!/^\d+$/.test(e.target.value)) {
            e.target.style.border = '1px solid red'
           setphoneError(<p className="error">Phone number is invalid</p>)
           console.log(phoneError)
           return
        }
        e.target.style.border = '1px solid green'
        setphoneError('')
    }


    function emailChecker (e) {
        e.preventDefault()
        if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.target.value)){
            e.target.style.border = '1px solid red'
            setemailError(<p className="error">Email is invalid</p>)
            console.log(phoneError)
            return
        }
        e.target.style.border = '1px solid green'
        setemailError('')
    }



    return(
        <div className="box">
            <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input onFocus={focusing} onBlur={bluring} name="firstName"/>
            </div>

            <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input onFocus={focusing} onBlur={bluring} name="lastName"/>
            </div>

            <div  className="field">
                <label htmlFor="phone">Phone</label>
                <input  onFocus={focusing} onChange={checkerPhone} onBlur={bluring} name="phone"/>
                {phoneError}
            </div>

            <div className="field">
                <label htmlFor="email">email</label>
                <input onChange={emailChecker}  onBlur={bluring}name="email"/>
                {emailError}
            </div>
            
        </div>
    )
}