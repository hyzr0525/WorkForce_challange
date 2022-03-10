import React from 'react'
import {useState} from 'react'
import {useDispatch} from "react-redux"
import {setCurrentUser, setLoggedIn} from "../states/action/actionCreater"

function SignUpForm({setFormSwitch}) {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: "",
        email_address: "",
        password: "",
        password_confirmation: "",
    })
    console.log(input)

    function signUpInput(e){
        setInput({...input, [e.target.name]: e.target.value})
    }

    function handleSignUp(e) {
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(input)
        })
        .then(res => res.json())
        .then(currentUser => {
            if(currentUser.error){
                dispatch(setLoggedIn(false))
            }else{
            dispatch(setCurrentUser(currentUser))
            dispatch(setLoggedIn(true))
            }
          })
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>

            <label>Name</label>
            <input 
            type="text"
            name='name'
            onChange={signUpInput}
            />

            <label>Email</label>
            <input 
            type="text"
            name='email_address'
            onChange={signUpInput}
            />

            <label>Password</label>
            <input 
            type="password"
            name='password'
            onChange={signUpInput}
            />

            <label>Password confirmation</label>
            <input 
            type="password"
            name='password_confirmation'
            onChange={signUpInput}
            />

            <button type='submit'>Submit</button>
        </form>
            <button onClick={()=>setFormSwitch(true)}>Sign In Insted</button>
    </div>
  )
}

export default SignUpForm