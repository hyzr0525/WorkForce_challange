import {combineReducers} from 'redux'
import { setCurrentUser, setLoggedIn, setOrganisations, getOrganisationInfo, getOrganisationShifts, setRerender } from './reducers'


const allReducers = combineReducers({
    setCurrentUser: setCurrentUser,
    setLoggedIn: setLoggedIn,
    setOrganisations: setOrganisations,
    getOrganisationInfo: getOrganisationInfo,
    getOrganisationShifts: getOrganisationShifts,
    setRerender: setRerender,
})

export default allReducers