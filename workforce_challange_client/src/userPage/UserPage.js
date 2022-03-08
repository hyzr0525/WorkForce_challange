import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"

function UserPage() {

    const dispatch = useDispatch()
    const currentUser = useSelector((state)=> state.setCurrentUser)
  return (
    <div>
        <h3>Name: {currentUser.name}</h3>
        <h3>Email Address: {currentUser.email_address}</h3>
        <h3>Password: ******</h3>
        <h3>Organisations joined: {currentUser.organisation.name}</h3>
        <button>Edit</button>
        <Link exact to="/Reset"><button>Reset Password</button></Link>
    </div>
  )
}

export default UserPage