import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useState, useEffect} from "react"
import ShiftsRow from './ShiftsRow'
import { getOrganisationShifts } from '../states/action/actionCreater'
import CreateShift from './CreateShift'


function Shifts() {

    const [viewShifts, setViewShifts] = useState(false)
    const [open, setOpen] = useState(false)
    const organisation = useSelector((state) => state.getOrganisationInfo)
    const organisationShifts = useSelector((state) => state.getOrganisationShifts)
    const dispatch = useDispatch()
    const shiftsRow = organisationShifts.map(shifts => <ShiftsRow shifts={shifts} />)
    let id = organisation.id
    
    
    useEffect(()=>{
        fetch(`http://localhost:3000/organisations/${id}`)
        .then(res => res.json())
        .then(data => dispatch(getOrganisationShifts(data)))
        }, [])

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
        <button>Edit</button>
        <button>Leave {organisation.name}</button>
        {viewShifts? shiftTable:null}
        {viewShifts? <button onClick={()=>setOpen(true)}>Create Shift</button>:null}
        {open? <CreateShift setOpen={setOpen} /> : null}
    </div>
  )
}

export default Shifts