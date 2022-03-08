import React from 'react';
import './App.css';
import LogInPage from './logInPage/LogInPage';
import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Header';
import {useDispatch} from "react-redux"
import {setCurrentUser, setOrganisations, setLoggedIn} from "./states/action/actionCreater"
import UserPage from "./userPage/UserPage"
import ResetPassword from './logInPage/ResetPassword';

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch("http://localhost:3000/organisations")
    .then(res => res.json())
    .then(organisations => dispatch(setOrganisations(organisations)))

    fetch('/me')
    .then(res => res.json())
    .then(user => {
      dispatch(setCurrentUser(user))
      if (user.error) {
      dispatch(setLoggedIn(false))
      console.log(user.error)}
      else {
      dispatch(setLoggedIn(true))
    console.log(user)}
    })

  }, [])

  return (
    <div className="App">
        <Header />
        
      <Routes>
        <Route exact path="/" element={<LogInPage />} />
        <Route exact path="/User" element={<UserPage />} />
        <Route exact path="/Reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
