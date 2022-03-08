import React from 'react'
import {useState} from "react"
import {useDispatch} from  "react-redux"

function ResetPassword() {

    const [input, setInput] = useState({
        email_address: "",
        password: "",
        password_confirmation: "",
    })

    function formFill(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function resetPassword(e){
        e.preventDefault()
        fetch("/reset", {
            method: 'PUT',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(input)
        })
        .then(res => res.json())
        .then(user => console.log(user))
    }
    
  return (
    <div>
        <h1>Reset Password</h1>
        <form onSubmit={resetPassword}>
            <label>Email Address</label>
            <input
                type="text"
                name='email_address'
                onChange={formFill}            
            />
            <label>New Password</label>
            <input 
                type="password"
                name='password'
                onChange={formFill}
            />
            <label>Password Confirmation</label>
            <input 
                type="password"
                name='password_confirmation'
                onChange={formFill}
            />

            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ResetPassword