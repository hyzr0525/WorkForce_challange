import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import CreateForm from './CreateForm'
import {setOrganisations, setRerender} from "../states/action/actionCreater"
import EditOrganisation from './EditOrganisation'
import OrgnisationList from './OrgnisationList'


function OrganisationsPage() {

    const [create, setCreate] = useState(false)
    const [update, setUpdate] = useState(false)
    const organisations = useSelector((state)=> state.setOrganisations)
    const reRender = useSelector((state) => state.setRerender)
    const dispatch = useDispatch()
    const organisation = useSelector((state) => state.getOrganisationInfo)

    const starterText = <p>You aren't a member of any organisations. Join an existing one or create a new one.</p>

    const organisationList = organisations.map((organisation) => <OrgnisationList organisation={organisation} setUpdate={setUpdate} />)



    useEffect(()=>{
    fetch("http://localhost:3000/organisations")
    .then(res => res.json())
    .then(organisations => dispatch(setOrganisations(organisations)))
    }, [update, create])

  

  return (
    <div className='mainContainer'>
      <div>
        {organisations? null : starterText}
        <h1>Organisations</h1>
        <ul>
            {organisationList}
        </ul>
        <button onClick={()=>setCreate(true)}>+ Create Organisation</button>
        {create? <CreateForm create={create} setCreate={setCreate}/>:null}
        {update? <EditOrganisation update={update} setUpdate={setUpdate} organisation={organisation}/>:null}
        </div>
    </div>
  )
}

export default OrganisationsPage