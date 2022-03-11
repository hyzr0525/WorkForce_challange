import React from 'react'
import {useState, useEffect} from "react"
import {useSelector} from "react-redux"



function ShiftsRow({shifts}) {

    const [name, setName] = useState([])
    const id = shifts.id
    const hourRate = useSelector((state) => state.getOrganisationInfo.hourly_rate)
    
    useEffect(()=>{
    fetch(`http://localhost:3000/shifts/${id}`)
    .then(res => res.json())
    .then(data => setName(data.user.name))
    })

    const shiftDate = (datetime) =>{
        const date = datetime.split("T")
        return date[0]
    }

    const startTime = (datetime) =>{
        const time = datetime.split("T")[1].split(":")
        const hour = `${time[0]} :  ${time[1]}`
        return hour
    }

    const finishTime = (datetime) =>{
        const time = datetime.split("T")[1].split(":")
        const hour = `${time[0]} :  ${time[1]}`
        return hour
    }

    const hoursWorked = (start, finish, breakTime) =>{
        let starHour = start.split(":")[0]
        let endHour = finish.split(":")[0]
        let offTime = (breakTime/60).toFixed(2)
        let hrWorked = endHour - starHour - offTime
        return hrWorked
    }

    const hrWorked = hoursWorked(startTime(shifts.start),finishTime(shifts.finish), shifts.break_length)

    console.log(hrWorked * hourRate )
    

  return (
    <>
        <tr>
            <td>{name}</td>
            <td>{shiftDate(shifts.start)}</td>
            <td>{startTime(shifts.start)}</td>
            <td>{finishTime(shifts.finish)}</td>
            <td>{shifts.break_length}</td>
            <td>{hoursWorked(startTime(shifts.start),finishTime(shifts.finish), shifts.break_length)}</td>
            <td>{hrWorked * hourRate}</td>
        </tr>
    </>
  )
}

export default ShiftsRow