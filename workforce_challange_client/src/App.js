import React from 'react';
import './App.css';
import LogInPage from './logInPage/LogInPage';
import {useEffect, useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Header';

function App() {

  useEffect(()=>{
    fetch("http://localhost:3000/organisations")
    .then(res => res.json())
    .then(organisations => console.log(organisations))

    fetch('/me')
    .then(res => res.json())
    .then(user => {
      console.log(user)
    })

  }, [])

  return (
    <div className="App">
        <Header />
      <Routes>
        <Route exact path="/" element={<LogInPage />} />
      </Routes>
    </div>
  );
}

export default App;
