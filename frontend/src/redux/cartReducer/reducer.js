import { GET_TO_CART_LOADING, GET_TO_CART_SUCCESS, GET_TO_CART_FAILURE, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from './actionType'

const initialState = {
    cart: [],
    loading: false,
    error: null,
    success: false,
};


export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART_LOADING: return { ...state, loading: true };
        case ADD_TO_CART_SUCCESS: return { ...state, loading: false };
        case ADD_TO_CART_FAILURE: return { ...state, loading: false, error: true };

        case GET_TO_CART_LOADING: return { ...state, loading: true };
        case GET_TO_CART_SUCCESS: return { ...state, loading: false, cart: payload };
        case GET_TO_CART_FAILURE: return { ...state, loading: false, error: true };

        default: return state;
    }
}