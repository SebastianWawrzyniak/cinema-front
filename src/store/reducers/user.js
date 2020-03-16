import { LOGIN, LOGOUT } from '../actions'

const initialState = {
    token: null,
    profile: null
}


export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return action.data
        case LOGOUT: 
            return initialState
        default:
            return initialState
    }
}