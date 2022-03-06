import {combineReducers} from 'redux'
import { setCurrentUser } from './reducers'


const allReducers = combineReducers({
    setCurrentUser: setCurrentUser,
})

export default allReducers