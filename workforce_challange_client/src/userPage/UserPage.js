import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {useState} from 'react'

function UserPage() {

    const dispatch = useDispatch()
    const currentUser = useSelector((state)=> state.setCurrentUser)
    const [edit, setEdit] = useState(false)
    const [input, setInput] = useState({
      name: "",
      email_address: "",
  })

  function editInput(e){
      setInput({...input, [e.target.name]: e.target.value})
  }

  function handleEdit(e) {
      e.preventDefault()
      fetch("http://localhost:3000/users", {
          method: 'PUT',
          headers: {'Content-Type': "application/json"},
          body: JSON.stringify(input)
      })
      .then(res => res.json())
      .then(currentUser => {
          if(currentUser.error){
              console.log(currentUser.error)
          }
          setEdit(false)
        })
  }

    const nameInput = 
    <input
      type="text"
      name='name'
      placeholder='New Name'
      onChange={editInput}
    />

    const emailInput =
    <input
      type="text"
      name='email_address'
      placeholder='New Email Address'
      onChange={editInput}
    />
    
    
  return (
    <div>
        <form onSubmit={handleEdit}>
          <h3>Name: {currentUser.name}</h3>
          {edit? nameInput:null}
          <h3>Email Address: {currentUser.email_address}</h3>
          {edit? emailInput:null}
          <h3>Password: ******</h3>
          {edit? <button>save</button>:null}
        </form>
        {edit? null:<button onClick={()=>setEdit(true)}>Edit</button>}
        {edit? <button onClick={()=>setEdit(false)}>Back</button>: null}
        <Link exact to="/Reset"><button>Reset Password</button></Link>
    </div>
  )
}

export default UserPage

// {currentUser.organisation.name? <h3>Organisations joined: {currentUser.organisation.name}</h3> : <h3>Organisations joined: You have not joined any organisations</h3>}