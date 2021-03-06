import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {setCurrentUser, setLoggedIn} from '../states/action/actionCreater'
import {Link, useNavigate} from 'react-router-dom'


function SignInForm({setFormSwitch}) {

    const redirect = useNavigate()
    const dispatch = useDispatch()
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
            if(currentUser.error){
                dispatch(setLoggedIn(false))
            }else{
            dispatch(setCurrentUser(currentUser))
            dispatch(setLoggedIn(true))
            redirect("/Home")
            }
          })
    }

  return (
    <div >
        <h2>Log in</h2>
        <form className='signIn' onSubmit={handleLogIn}>
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
        <Link exact to= '/Reset'>forgot password?</Link>
        <button onClick={() =>setFormSwitch(false)}>Sign Up</button>
    </div>
  )
}

export default SignInForm