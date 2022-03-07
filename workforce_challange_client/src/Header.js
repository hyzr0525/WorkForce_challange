import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {setLoggedIn} from './states/action/actionCreater'

function Header() {

  const dispatch = useDispatch()
  let history = useNavigate()

  function logOut(){
    fetch("/logout", {method: 'DELETE'})
    dispatch(setLoggedIn(false))
    history.push('/')
}

  return (
    <div>
        <h1>Adnat</h1>
        <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Header