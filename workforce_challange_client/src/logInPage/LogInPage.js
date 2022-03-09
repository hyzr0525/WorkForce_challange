import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import {useState} from 'react'


function LogInPage() {

  const [formSwitch, setFormSwitch] = useState(true)

  const form = formSwitch? <SignInForm setFormSwitch={setFormSwitch}/> : <SignUpForm setFormSwitch={setFormSwitch}/>

  return (
    <div>
      {form}
    </div>
  )
}

export default LogInPage