import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useState} from "react"
import ShiftsRow from './ShiftsRow'


function Shifts() {

    const organisation = useSelector((state) => state.getOrganisationInfo)
    const shiftsRow = organisation.users.map(user => user.shifts.map(shifts => <ShiftsRow shifts={shifts} />))
    
    

  return (
    <div>
        <h1>{organisation.name}</h1>
        <button>view Shifts</button>
        <button>Edit</button>
        <button>Leave {organisation.name}</button>
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
    </div>
  )
}

export default Shifts