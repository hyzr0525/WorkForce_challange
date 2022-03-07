import React from 'react'
import {useState} from 'react'

function SignInForm() {

    const [input, setInput] = useState({
        email_address: "",
        password: "",
    })

    function signInInput(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function handleLogIn(e) {
        e.preventDefault()
        fetch("/login", {
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
        <h2>Log in</h2>
        <form onSubmit={handleLogIn}>
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
            <button type='submit'>Log in</button>
        </form>
    </div>
  )
}

export default SignInForm