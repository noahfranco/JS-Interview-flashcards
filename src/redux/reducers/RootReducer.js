import {combineReducers} from "redux";

import {FlashCardsGetReducer} from "./FlashCardsGetReducer";
import {RegisterReducer} from "./RegisterReducer";
import {LoginReducer} from "./LoginReducer";
import {ProfileReducer} from "./ProfileReducer";

const RootReducer = combineReducers({
    // call reducer here to combine them
    card: FlashCardsGetReducer,
    register: RegisterReducer,
    login: LoginReducer,
    user: ProfileReducer

})

export default RootReducer
