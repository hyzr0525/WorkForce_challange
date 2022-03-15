import React from 'react'
import {useState} from 'react'
import {useSelector} from "react-redux"

function CreateShift({setOpen}) {

    const currentUser = useSelector((state) => state.setCurrentUser)
    const currentOrg = useSelector((state) => state.getOrganisationInfo)
    
    const [timeInput, setTimeInput] = useState({
        startDate: "",
        start: "",
        finishDate: "",
        finish: ""
    })
    const startTime = `${timeInput.startDate} ${timeInput.start}`
    const finishTime = `${timeInput.finishDate} ${timeInput.finish}`

    const [newShiftInput , setNewShiftInput] = useState({
        start: startTime,
        finish: finishTime,
        break_length: "",
        user_id: currentUser.id,
        organisation_id: currentOrg.id
    })


    function formInput(e){
        setNewShiftInput({...newShiftInput, [e.target.name]: e.target.value})
        
    }

    function createShift(e){
        e.preventDefault()
        fetch("/shifts", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(newShiftInput)
        })
        .then(res=>res.json())
        .then(shifts => {
            setOpen(false)
        })
    }


  return (
    <div className='OverLay'>
        <div className='FormStyle'>
        <form className="signIn" onSubmit={createShift} >
        <label>Start date</label>
        <input
            type="datetime-local"
            name='start'
            onChange={formInput}
        />
        {/* <label>Start time</label>
        <input
            type="text"
            name="start"
            onChange={formInput}
        /> */}
        <label>Finish date</label>
        <input
            type="datetime-local"
            name='finish'
            onChange={formInput}
        />
        {/* <label>Finish time</label>
        <input
            type="text"
            name="finish"
            placeholder='HH:MM'
            onChange={(e) => setTimeInput({...timeInput, [e.target.name]: e.target.value})}
        /> */}
        <label>Break length(minutes)</label>
        <input
            type="text"
            name="break_length"
            onChange={formInput}
        />
        <button type="submit">Create</button>
        </form>
        <button onClick={()=>setOpen(false)}>Back</button>
        </div>
    </div>
  )
}

export default CreateShift