import { FAILDLOGIN } from "../actions/LoginAction";
import {STARTFETCHING, FETCHEDPROFILE, FAILDFETCH} from "../actions/ProfileAction";

const initialState = {
    user: [],
    isFetching: false,
    error: "",
}

export const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case STARTFETCHING:
            return {
                ...state,
                isFetching: true
            }
        case FETCHEDPROFILE: 
            return {
                ...state,
                isFetching: false,
                user: action.payload
            }
        case FAILDFETCH:
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        default:
            return state
    }
}