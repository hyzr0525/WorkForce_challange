import {combineReducers} from 'redux'
import { setCurrentUser, setLoggedIn, setOrganisations, getOrganisationInfo, getOrganisationShifts } from './reducers'


const allReducers = combineReducers({
    setCurrentUser: setCurrentUser,
    setLoggedIn: setLoggedIn,
    setOrganisations: setOrganisations,
    getOrganisationInfo: getOrganisationInfo,
    getOrganisationShifts: getOrganisationShifts,
})

export default allReducers