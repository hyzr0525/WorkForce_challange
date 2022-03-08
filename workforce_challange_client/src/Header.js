import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {setLoggedIn} from './states/action/actionCreater'

function Header() {

  const dispatch = useDispatch()
  const loggedIn = useSelector((state)=> state.setLoggedIn)
  const currentUser = useSelector((state) => state.setCurrentUser)
  let history = useNavigate()

  const userItems = 
    <>
      <p>Logged in as {currentUser.name}</p>
      <Link exact to="/User"><button>User</button></Link>
      <button onClick={logOut}>Log Out</button>
    </>
  
  
  function logOut(){
    fetch("/logout", {method: 'DELETE'})
    dispatch(setLoggedIn(false))
    history("/")
  }

  return (
    <div>
        <Link exact to="/"><h1>Adnat</h1></Link>
        {loggedIn? userItems : null}
    </div>
  )
}

export default Header