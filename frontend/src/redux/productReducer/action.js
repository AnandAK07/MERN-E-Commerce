import axios from "axios"
import { GET_DATA_FAILURE, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionType";

const apiUrl = process.env.REACT_APP_API_URL;

export const getProductRequest = () => {
    return { type: GET_DATA_LOADING }
}

export const getProductSuccess = (payload) => {
    return { type: GET_DATA_SUCCESS ,payload:payload}
}

export const getProductFailure = () => {
    return { type: GET_DATA_FAILURE }
}

export const getAllProducts = async (dispatch) => {
    try {
        dispatch({ type: GET_DATA_LOADING })
        const token = localStorage.getItem('e-token')
        console.log(token)
        const data=await axios({
            method:'get',
            url: `${apiUrl}/product`,
            headers:{
            Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_DATA_SUCCESS, payload: data.data})
    } catch (error) {
        console.log(error)
        dispatch({ type: GET_DATA_FAILURE })
    }
}