import React from 'react';
import './App.css';
import LogInPage from './logInPage/LogInPage';
import {useEffect, useState} from 'react'

function App() {

  useEffect(()=>{
    fetch("http://localhost:3000/organisations")
    .then(res => res.json())
    .then(organisations => console.log(organisations))
  })

  return (
    <div className="App">
    <LogInPage />
    </div>
  );
}

export default App;
