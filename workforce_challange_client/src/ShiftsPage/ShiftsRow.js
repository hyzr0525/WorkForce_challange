import React from 'react'
import {useSelector} from "react-redux"



function ShiftsRow({shifts}) {

    const hourRate = useSelector((state) => state.getOrganisationInfo.hourly_rate)
    
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


  return (
    <>
        <tr>
            <td>{shifts.user.name}</td>
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