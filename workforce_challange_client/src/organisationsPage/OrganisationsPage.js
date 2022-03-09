import React from 'react'
import {useSelector} from "react-redux"
import {useState} from "react"
import CreateForm from './CreateForm'


function OrganisationsPage() {

    const [create, setCreate] = useState(false)
    const organisations = useSelector((state)=> state.setOrganisations)

    const starterText = <p>You aren't a member of any organisations. Joint an existing one or create a new one.</p>

    const organisationList = organisations.map((organisation) => <>
        <li>{organisation.name}</li>
        <button>Edit</button>
    </>)

  return (
    <div>
        {starterText}
        <h1>Organisations</h1>
        <ul>
            {organisationList}
        </ul>
        <button onClick={()=>setCreate(true)}>Create Organisation</button>
        {create? <CreateForm create={create} setCreate={setCreate}/>:null}
    </div>
  )
}

export default OrganisationsPage