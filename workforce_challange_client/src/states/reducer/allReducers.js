import {combineReducers} from 'redux'
import { setCurrentUser, setLoggedIn, setOrganisations } from './reducers'


const allReducers = combineReducers({
    setCurrentUser: setCurrentUser,
    setLoggedIn: setLoggedIn,
    setOrganisations: setOrganisations,
})

export default allReducers