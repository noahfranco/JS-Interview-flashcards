import axios from "axios";

export const STARTFETCHINGREGISTER = "STARTFETCHINGREGISTER";
export const FETCHINGREGISTER = "FETCHINGREGISTER";
export const FETCHINGFAILD = "FETCHINGFAILD";

const RegisterAction = (input) => dispatch => {
    dispatch({type:STARTFETCHINGREGISTER})
    axios
    .post("http://localhost:3333/api/users/register", input)
    .then((response) => {
        console.log({response})
        dispatch({type: FETCHINGREGISTER, payload: response.data})
    }) .catch((error) => {
        dispatch({type: FETCHINGFAILD, error: error})
    })
}

export default RegisterAction


// localhost for user to register:
    // http://localhost:3333/api/users/register

// production URL for user to register 
    // https://js-interview-questions.herokuapp.com/api/users/register


    // To view registered users 
        // https://js-interview-questions.herokuapp.com/api/users/view