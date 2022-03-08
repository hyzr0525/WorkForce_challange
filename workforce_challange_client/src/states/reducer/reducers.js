import { ActionTypes } from "../action/action-types"

export const setCurrentUser = (state=[], action) =>{
    switch(action.type){
        case ActionTypes.SET_CURRENT_USER:
            return state = action.payload;
        default:
            return state
    }
}

export const setLoggedIn = (state = false, action) =>{
    switch(action.type){
        case ActionTypes.SET_LOGGED_IN:
            return state = action.payload;
        default:
            return state
    }
}

export const setOrganisations = (state=[], action) =>{
    switch(action.type){
        case ActionTypes.SET_ORGANISATIONS:
            return state = action.payload;
        default:
            return state
    }
}