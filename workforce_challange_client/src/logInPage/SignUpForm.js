import React from 'react'
import {useState} from 'react'

function SignUpForm() {

    const [input, setInput] = useState({
        name: "",
        email_address: "",
        password: "",
        password_confirmation: ""
    })

    function signInInput(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function handleLogIn(e) {
        e.preventDefault()
        fetch("/signup", {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(input)
        })
        .then(res => res.json())
        .then(currentUser => {
            console.log(currentUser)
        })
    }

  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleLogIn}>

            <label>Name</label>
            <input 
            type="text"
            name='name'
            onChange={signInInput}
            />

            <label>Email</label>
            <input 
            type="text"
            name='email_address'
            onChange={signInInput}
            />

            <label>Password</label>
            <input 
            type="password"
            name='password'
            onChange={signInInput}
            />

            <label>Password confirmation</label>
            <input 
            type="password"
            name='password_confirmation'
            onChange={signInInput}
            />

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm