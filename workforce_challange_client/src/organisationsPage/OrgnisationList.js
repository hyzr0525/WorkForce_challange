import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getOrganisationInfo} from "../states/action/actionCreater"
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"


function OrgnisationList({organisation, setUpdate}) {

    const userId = useSelector((state) => state.setCurrentUser.id)
    const user = useSelector((state) => state.setCurrentUser)
    const organisationId = organisation.id
    const joinInput = {user_id: userId, organisation_id: organisationId}
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const [isJoined, setIsJoined] = useState(false)
   

     useEffect(async() => {
        let users = user.organisations
       const userLength = user.organisations.length
       let length = await userLength
       for(let i=0; i<length; i++){
         let orgId = users[i].id
       if(orgId === organisationId){
         setIsJoined(true)
         break
      }
    }
  }, [isJoined])

    function setState (){
        setUpdate(true)
        dispatch(getOrganisationInfo(organisation))
    }

    function setOrg() {
      dispatch(getOrganisationInfo(organisation))
      redirect("/OrganisationShifts")
    }

    function handleJoin(){
      fetch("/user_organisations", {
        method: "POST",
        headers :{"Content-Type":"application/json"},
        body: JSON.stringify(joinInput)
      })
      .then(res => res.json())
      .then(userOrganisation => console.log(userOrganisation))
          
    }
    
  return (
    <div>
        <li>{organisation.name}</li>
        <button onClick={setState}>Edit</button>
        {isJoined?  <button onClick={setOrg}>View</button>:<button onClick={handleJoin}>Join</button>}
        
    </div>
  )
}

export default OrgnisationList