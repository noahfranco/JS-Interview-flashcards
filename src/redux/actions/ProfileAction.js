import {AxiosWithAuth} from "../../middleware/AxiosWithAuth"
export const STARTFETCHING = "STARTFETCHING";
export const FETCHEDPROFILE = "FETCHEDPROFILE";
export const FAILDFETCH = "FAILDFETCH";


const ProfileAction = (id) => dispatch => {
    console.log("parms in ProfileActions: ", id)
    dispatch({type: STARTFETCHING})
    AxiosWithAuth()
    .get(`http://localhost:3333/api/users/${id}`)
        .then((res) => {
            console.log({res})
            dispatch({type: FETCHEDPROFILE, payload: [res.data]})
        }) .catch((error) => {
            dispatch({type: FAILDFETCH, error: error})
        })
}

export default ProfileAction

// localhost endpoints:
    // http://localhost:3333/api/users/:id
// production endpoints: