import {combineReducers} from "redux";

import {FlashCardsGetReducer} from "./FlashCardsGetReducer"
import {RegisterReducer} from "./RegisterReducer"
import {LoginReducer} from "./LoginReducer"

const RootReducer = combineReducers({
    // call reducer here to combine them
    card: FlashCardsGetReducer,
    register: RegisterReducer,
    login: LoginReducer

})

export default RootReducer
