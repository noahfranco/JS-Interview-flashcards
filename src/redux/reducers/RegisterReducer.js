import {STARTFETCHINGREGISTER, FETCHINGREGISTER, FETCHINGFAILD} from "../actions/RegisterAction";

const initilState = {
    register: [],
    isFetching: false,
    error: "",
}

export const RegisterReducer = (state = initilState, action) => {
    switch(action.type) {
        case STARTFETCHINGREGISTER:
            return {
                ...state, 
                isFetching: true
            }
        case FETCHINGREGISTER:
            return {
                ...state,
                isFetching: false, 
                register:  action.payload
            }
        case FETCHINGFAILD:
            return {
                ...state,
                isFetching: false, 
                error: action.error
            }
        default:
            return state
    }
}