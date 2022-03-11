import {combineReducers} from 'redux'
import { setCurrentUser, setLoggedIn, setOrganisations, getOrganisationInfo } from './reducers'


const allReducers = combineReducers({
    setCurrentUser: setCurrentUser,
    setLoggedIn: setLoggedIn,
    setOrganisations: setOrganisations,
    getOrganisationInfo: getOrganisationInfo
})

export default allReducers