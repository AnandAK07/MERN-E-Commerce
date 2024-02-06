import { GET_DATA_LOADING, GET_DATA_SUCCESS, GET_DATA_FAILURE } from './actionType'

const initialState = {
    product: [],
    loading: false,
    error: null,
    success: false,
};


export const productReducer=(state=initialState,{type,payload})=>{
    switch (type){
        case GET_DATA_LOADING: return { ...state,loading:true};
        case GET_DATA_SUCCESS: return { ...state, loading: false, success: true, product :payload};
        case GET_DATA_FAILURE:return{...state,loading:false,error:true}
        
        default:return state;
    }
}