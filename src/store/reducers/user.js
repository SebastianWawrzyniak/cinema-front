import { UserTypes } from "../actions"

const initialState = {}


export default (state = initialState, action) => {
    switch(action.type) {
        case UserTypes.LOGIN:
            return action.user
        case UserTypes.LOGOUT: 
            return initialState
        default:
            return initialState
    }
}