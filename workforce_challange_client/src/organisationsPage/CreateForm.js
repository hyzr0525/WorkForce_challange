import React from 'react'
import {useState} from "react"
import {useDispatch} from "react-redux"
import {setOrganisations} from "../states/action/actionCreater"

function CreateForm({create, setCreate}){

    const dispatch = useDispatch()
    const [newOrgInput , setNewOrgInput] = useState({
        name: "",
        hourly_rate: "",
    })

    function formInput(e){
        setNewOrgInput({...newOrgInput, [e.target.name]: e.target.value})
        
    }
    function createOrganisation(e){
        e.preventDefault()
        fetch("/organisations", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(newOrgInput)
        })
        .then(res=>res.json())
        .then(organisations => {
            setCreate(false)
        })
    }

    if (!create) return null

  return (
      <div className='OverLay'>
        <div className='FormStyle'>
        <form onSubmit={createOrganisation} >
        <label>Name</label>
        <input
            type="text"
            name='name'
            onChange={formInput}
        />
        <label>Hourly Rate</label>
        $:<input
            type="text"
            name="hourly_rate"
            onChange={formInput}
        />
        <button type="submit">Create</button>
        </form>
        <button onClick={()=>setCreate(false)}>Back</button>
        </div>
    </div>
  )
}

export default CreateForm