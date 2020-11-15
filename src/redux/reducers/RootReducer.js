import {combineReducers} from "redux";

import { FlashCardsGetReducer } from "./FlashCardsGetReducer"

const RootReducer = combineReducers({
    // call reducer here to combine them
    card: FlashCardsGetReducer
})

export default RootReducer
