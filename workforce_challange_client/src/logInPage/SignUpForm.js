import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setCurrentUser, setLoggedIn} from "../states/action/actionCreater"

function SignUpForm() {

    const dispatch = useDispatch()
    const organisations = useSelector((state) => state.setOrganisations)

    const [input, setInput] = useState({
        name: "",
        email_address: "",
        password: "",
        password_confirmation: "",
        organisation_id: organisations[0].id
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
        <h1>Sign Up</h1>
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

            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpForm