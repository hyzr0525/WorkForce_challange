import React from 'react'

function LogInPage() {
  return (
    <div>
        <h1>Adnat</h1>
        <h2>Log in</h2>
        <form>
            <label>Email</label>
            <input 
            type="text"
            name='email_address'
            />
            <label>Password</label>
            <input 
            type="text"
            name='password'
            />
            <button>Log in</button>
        </form>
    </div>
  )
}

export default LogInPage