import axios from "axios";
import {AxiosWithAuth} from "../../middleware/AxiosWithAuth";
export const STARTLOGIN = "STARTLOGIN";
export const FETCHINGLOGIN = "FETCHINGLOGIN";
export const FAILDLOGIN = "FAILDLOGIN";

const LoginAction = (login) => dispach => {
    dispach({type: STARTLOGIN})
    axios
        .post("http://localhost:3333/api/users/login", login)
        .then((loginResponse) => {
            console.log({loginResponse})
            localStorage.setItem("token", loginResponse.data.token)
            dispach({type: FETCHINGLOGIN, payload: loginResponse.data})
        }) .catch((error) => {
            dispach({type: FAILDLOGIN, error: error})
        })
} 

export default LoginAction

// localhost endpoint:
    // http://localhost:3333/api/users/login