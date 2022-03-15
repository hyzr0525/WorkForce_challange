import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {setLoggedIn} from './states/action/actionCreater'

function Header() {

  const dispatch = useDispatch()
  const loggedIn = useSelector((state)=> state.setLoggedIn)
  const currentUser = useSelector((state) => state.setCurrentUser)
  let redirect = useNavigate()

  const userItems = 
    <div className='NavItem'>
      <p>Logged in as {currentUser.name}</p>
      <button className='button2' onClick={()=>redirect("/Home")}>Home</button>
      <Link exact to="/User"><button className='button2'>User</button></Link>
      <button className="button2" onClick={logOut}>Log Out</button>
    </div>
  
  
  function logOut(){
    fetch("/logout", {method: 'DELETE'})
    dispatch(setLoggedIn(false))
    redirect("/")
  }

  return (
    <div className="Header">
        <h1 className='logo'>Adnat</h1>
        {loggedIn? userItems : null}
    </div>
  )
}

export default Header