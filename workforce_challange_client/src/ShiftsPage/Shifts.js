import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import ShiftsRow from './ShiftsRow'
import { getOrganisationShifts } from '../states/action/actionCreater'
import CreateShift from './CreateShift'
import EditOrganisation from '../organisationsPage/EditOrganisation'


function Shifts() {

    const [update, setUpdate] = useState(false)
    const [viewShifts, setViewShifts] = useState(false)
    const [open, setOpen] = useState(false)
    const redirect = useNavigate()
    const userOrg = useSelector((state) => state.setCurrentUser.user_organisations)
    const organisation = useSelector((state) => state.getOrganisationInfo)
    const organisationShifts = useSelector((state) => state.getOrganisationShifts)
    const dispatch = useDispatch()
    const shiftsRow = organisationShifts.map(shifts => <ShiftsRow shifts={shifts} />)
    let id = organisation.id
    

    const userOrganisationId = (userOrg) =>{
        for(let i = 0; i<userOrg.length; i++){
            if(userOrg[i].organisation.id == organisation.id){
                return userOrg[i].id
            }
        }
    }

    const userOrgId = userOrganisationId(userOrg)
    console.log(userOrgId)
    
    useEffect(()=>{
        fetch(`http://localhost:3000/organisations/${id}`)
        .then(res => res.json())
        .then(data => dispatch(getOrganisationShifts(data)))
    }, [update])
    
    function handleLeave(){
        fetch(`/user_organisations/${userOrgId}`, {method: 'DELETE'})
        redirect("/Home")
    }


    const shiftTable = 
    <>
        <table>
            <thead>
                <th>Employee name</th>
                <th>Shift date</th>
                <th>Start time</th>
                <th>Finish time</th>
                <th>Break length(minutes)</th>
                <th>Hours worked</th>
                <th>Shift cost</th>
            </thead>
                {shiftsRow}
        </table>
    </>

  return (
    <div>
        <h1>{organisation.name}</h1>
        <button onClick={()=> setViewShifts(true)}>view Shifts</button>
        <button onClick={()=> setUpdate(true)}>Edit</button>
        {update? <EditOrganisation update={update} setUpdate={setUpdate} organisation={organisation}/>:null}
        <button onClick={handleLeave}>Leave {organisation.name}</button>
        {viewShifts? shiftTable:null}
        {viewShifts? <button onClick={()=>setOpen(true)}>Create Shift</button>:null}
        {open? <CreateShift setOpen={setOpen} /> : null}
    </div>
  )
}

export default Shifts