import React from 'react'

function OrgnisationList({organisation, setUpdate, setOrganisation}) {

    function setState (){
        setUpdate(true)
        setOrganisation(organisation)
    }

  return (
    <div>
        <li>{organisation.name}</li>
        <button onClick={setState}>Edit</button>
        <button>Join</button>
    </div>
  )
}

export default OrgnisationList