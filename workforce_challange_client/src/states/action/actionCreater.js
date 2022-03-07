import { ActionTypes } from "./action-types"

export const setCurrentUser = (user) => {
    return {
        type: ActionTypes.SET_CURRENT_USER,
        payload: user,
    }
}

export const setLoggedIn = (boolean) => {
    return {
        type: ActionTypes.SET_LOGGED_IN,
        payload: boolean,
    }
}