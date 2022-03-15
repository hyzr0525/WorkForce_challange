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

export const setOrganisations = (organisations) => {
    return {
        type: ActionTypes.SET_ORGANISATIONS,
        payload: organisations,
    }
}

export const getOrganisationInfo = (organisation) => {
    return {
        type: ActionTypes.GET_ORGANISATION_INFO,
        payload: organisation,
    }
}

export const getOrganisationShifts = (shifts) => {
    return {
        type: ActionTypes.GET_ORGANISATION_SHIFTS,
        payload: shifts,
    }
}

export const setRerender = (boolean) => {
    return {
        type: ActionTypes.SET_RERENDER,
        payload: boolean,
    }
}