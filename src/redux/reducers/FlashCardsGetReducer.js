import {
    STARTCARD,
    FETCHCARD,
    FAILDCARD
} from "../actions/FlashCardsGetActions";

const initialState = {
    card: [],
    isFetching: false,
    error: ""
}

export const FlashCardsGetReducer = (state = initialState, action) => {
    switch(action.type) {
        case STARTCARD:
            return {
                ...state,
                isFetching: true,
            }
        case FETCHCARD:
            return {
                ...state,
                isFetching: false,
                card: action.payload,
            }
        case FAILDCARD:
            return {
                ...state,
                isFetching: false,
                card: action.error,
            }
        default:
            return state
    }
}