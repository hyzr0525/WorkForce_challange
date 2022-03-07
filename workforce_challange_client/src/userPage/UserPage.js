import React from 'react'
import {useSelector, useDispatch} from "react-redux"


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
        <button>Reset Password</button>
    </div>
  )
}

export default UserPage