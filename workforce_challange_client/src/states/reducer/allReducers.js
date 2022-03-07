import {combineReducers} from 'redux'
import { setCurrentUser, setLoggedIn } from './reducers'


const allReducers = combineReducers({
    setCurrentUser: setCurrentUser,
    setLoggedIn: setLoggedIn,
})

export default allReducers