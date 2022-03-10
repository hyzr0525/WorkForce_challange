import React from 'react'
import {useSelector} from "react-redux"

function OrgnisationList({organisation, setUpdate, setOrganisation}) {

    const userId = useSelector((state) => state.setCurrentUser.id)
    const organisationId = organisation.id
    const joinInput = {user_id: userId, organisation_id: organisationId}
    

    function setState (){
        setUpdate(true)
        setOrganisation(organisation)
    }

      function handleJoin(){
        fetch("/user_organisations", {
          method: "POST",
          headers :{"Content-Type":"application/json"},
          body: JSON.stringify(joinInput)
        })
        .then(res => res.json())
        .then(userOrganisation => console.log(userOrganisation))
        
    }
    
  return (
    <div>
        <li>{organisation.name}</li>
        <button onClick={setState}>Edit</button>
        <button onClick={handleJoin}>Join</button>
    </div>
  )
}

export default OrgnisationList