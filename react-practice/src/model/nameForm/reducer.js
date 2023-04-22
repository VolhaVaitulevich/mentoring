import { initialState } from './store.js'
import { NAME_FORM_ACTION_TYPES } from './actionTypes.js'

export const nameFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_FORM_ACTION_TYPES.UPDATE_NAME: //add action types, rename action types UPDATE_SMTH, remove name from payload
            return {...state, name: action.payload}
        case NAME_FORM_ACTION_TYPES.RESET_NAME:
            return initialState
        default: 
            return state
    }
}
