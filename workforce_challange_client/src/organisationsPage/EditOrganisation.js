import React from 'react'
import {useState} from 'react'


function EditOrganisation({update, setUpdate, organisation}) {

  const [newOrgInput , setNewOrgInput] = useState({
    id: organisation.id,
    name: "",
    hourly_rate: "",
  })

  function formInput(e){
      setNewOrgInput({...newOrgInput, [e.target.name]: e.target.value})
      
  }
  function createOrganisation(e){
      e.preventDefault()
      fetch(`/organisations/${organisation.id}`, {
          method : 'PUT',
          headers :{"Content-Type":"application/json"},
          body: JSON.stringify(newOrgInput)
      })
      .then(res=>res.json())
      .then(organisation => {
          setUpdate(false)
          console.log(organisation)
      })
  }

  function deleteExercise(){
    fetch(`/organisations/${organisation.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(organisations => {
      console.log(organisations)
      setUpdate(false)
    })
    }

  if (!update) return null

  return (
      <div className='OverLay'>
        <div className='FormStyle'>
        <h1>Edit Organisation</h1>
        <form className="signIn" onSubmit={createOrganisation} >
        <label>Name</label>
        <input
            type="text"
            name='name'
            onChange={formInput}
        />
        <label>Hourly Rate $:</label>
        <input
            type="text"
            name="hourly_rate"
            onChange={formInput}
        />
        <button type="submit">Update</button>
        </form>
        <button onClick={()=>setUpdate(false)}>Back</button>
        <button onClick={deleteExercise}>Delete Organisation</button>
        </div>
    </div>
  )
}

export default EditOrganisation