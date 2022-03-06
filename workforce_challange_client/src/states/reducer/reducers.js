import { ActionTypes } from "../action/action-types"

export const setCurrentUser = (state=[], action) =>{
    switch(action.type){
        case ActionTypes.SET_CURRENT_USER:
            return state = action.payload;
        default:
            return state
    }
        
}