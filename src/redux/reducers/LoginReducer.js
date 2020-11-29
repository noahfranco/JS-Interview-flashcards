import {STARTLOGIN, FETCHINGLOGIN, FAILDLOGIN} from "../actions/LoginAction";

const initialState = {
    login: [],
    isFetching: false, 
    error: ""
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case STARTLOGIN:
            return {
                ...state,
                isFetching: true
            }
        case FETCHINGLOGIN:
            return {
                ...state,
                login: action.payload,
                isFetching: false
            }
        case FAILDLOGIN:
            return {
                ...state,
                isFetching: false,
                error: action.error
            } 
        default:
            return state
    }
    
}