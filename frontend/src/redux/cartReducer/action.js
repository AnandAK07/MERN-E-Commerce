import axios from "axios";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, GET_TO_CART_FAILURE, GET_TO_CART_LOADING, GET_TO_CART_SUCCESS } from "./actionType";
import { Bounce, toast } from "react-toastify";
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
        if (res.data) {
            toast.success('🦄 Product added successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
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
        toast.info('🦄 Product removed successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        // dispatch({ type: GET_TO_CART_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_TO_CART_FAILURE })
        console.log(error)
    }
}

export const removeAllProductFromCart = async ()=>{
    const token = localStorage.getItem('e-token');
    try {
        const res = await axios({
            method: 'delete',
            url: `${apiUrl}/cart/removeall`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error) {
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