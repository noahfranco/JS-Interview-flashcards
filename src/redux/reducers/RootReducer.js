import {combineReducers} from "redux";

import {FlashCardsGetReducer} from "./FlashCardsGetReducer"
import {RegisterReducer} from "./RegisterReducer"

const RootReducer = combineReducers({
    // call reducer here to combine them
    card: FlashCardsGetReducer,
    register: RegisterReducer
})

export default RootReducer
