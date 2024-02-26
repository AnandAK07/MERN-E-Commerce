import axios from "axios";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_TO_CART_FAILURE, GET_TO_CART_LOADING, GET_TO_CART_SUCCESS } from "./actionType";
const apiUrl = process.env.REACT_APP_API_URL;


export const addToCart = (id) => async (dispatch) => {
    const token = localStorage.getItem('e-token');
    try {
        dispatch({ type: ADD_TO_CART_LOADING })
        const res = await axios.post(
            `${apiUrl}/cart/add`,
            {
                productId: id
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        console.log(res.data)
        dispatch({ type: ADD_TO_CART_SUCCESS })
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAILURE })
        console.log(error)
    }
}



export const updateCartProduct = (id, value) => async (dispatch) => {
    const token = localStorage.getItem('e-token');
    try {
        // dispatch({ type: GET_TO_CART_LOADING })
        const res = await axios({
            method: 'patch',
            url: `${apiUrl}/cart/update`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                update: value,
                productId: id
            }
        })
        // console.log(res.data, 'cavrt')
        // dispatch({ type: GET_TO_CART_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_TO_CART_FAILURE })
        console.log(error)
    }
}



export const removeFromCartProduct = (id) => async (dispatch) => {
    const token = localStorage.getItem('e-token');
    try {
        // dispatch({ type: GET_TO_CART_LOADING })
        const res = await axios({
            method: 'delete',
            url: `${apiUrl}/cart/remove`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                productId: id
            }
        })
        console.log(res, 'daciton')
        // console.log(res.data, 'cavrt')
        // dispatch({ type: GET_TO_CART_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_TO_CART_FAILURE })
        console.log(error)
    }
}

export const getCartProduct = async (dispatch) => {
    const token = localStorage.getItem('e-token');
    try {
        dispatch({ type: GET_TO_CART_LOADING })
        const res = await axios({
            method: 'get',
            url: `${apiUrl}/cart`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: GET_TO_CART_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_TO_CART_FAILURE })
        console.log(error)
    }
}