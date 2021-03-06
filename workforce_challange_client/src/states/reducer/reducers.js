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

export const getOrganisationInfo = (state=[], action) =>{
    switch(action.type){
        case ActionTypes.GET_ORGANISATION_INFO:
            return state = action.payload;
        default:
            return state
    }
}

export const getOrganisationShifts = (state=[], action) =>{
    switch(action.type){
        case ActionTypes.GET_ORGANISATION_SHIFTS:
            return state = action.payload;
        default:
            return state
    }
}

export const setRerender = (state = true, action) =>{
    switch(action.type){
        case ActionTypes.SET_RERENDER:
            if(action.payload == false){
                state = true;
                return state;
            } else{
                state = false;
                return state;
            }
        default:
            return state
    }
}