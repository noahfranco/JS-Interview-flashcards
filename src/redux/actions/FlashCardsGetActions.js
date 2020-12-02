import {AxiosWithAuth} from "../../middleware/AxiosWithAuth";
export const STARTCARD = "STARTCARD";
export const FETCHCARD = "FETCHCARD";
export const FAILDCARD = "FAILDCARD";

const FlashCardsGetAction = () => dispatch => {
    dispatch({type:STARTCARD})
    AxiosWithAuth()
        .get("http://localhost:3333/api/flashcards/get")
        .then((res) => {
            console.log({res})
            dispatch({type: FETCHCARD, payload: res.data})
        }) .catch((error) => {
            dispatch({type: FAILDCARD, error: error})
        })
}

export default FlashCardsGetAction

// Deployment URL:
    // https://js-interview-questions.herokuapp.com/api/flashcards/get
// localhost: 
    // http://localhost:3333/api/flashcards/get