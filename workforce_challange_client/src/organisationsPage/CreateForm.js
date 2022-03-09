import React from 'react'

function CreateForm({create, setCreate}){

    if (!create) return null

  return (
      <div className='OverLay'>
        <div className='FormStyle'>
        <form >
        <label>Name</label>
        <input
            type="text"
            name='name'
            
        />
        <label>Hourly Rate</label>
        $:<input
            type="text"
            name="hourly_rate"
    
        />
        </form>
        <button onClick={()=>setCreate(false)}>Back</button>
        </div>
    </div>
  )
}

export default CreateForm