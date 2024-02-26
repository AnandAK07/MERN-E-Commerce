import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionType"


export const login = (userDetails) => async (dispatch) => {
    console.log(userDetails,'l')
    try {
        dispatch({ type: LOGIN_REQUEST })
        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/users/login`,
            data: userDetails
        });
        const token=res?.data.token
        if (token) {
            localStorage.setItem("e-token", token)
        }
        dispatch({ type: LOGIN_SUCCESS, payload: token })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE })
        console.log(error)
    }
}


export const logout = (dispatch) => {
    dispatch({ type: LOGOUT })
}