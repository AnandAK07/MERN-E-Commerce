import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { authReducer } from './authReducer/reducer'
import { productReducer } from './productReducer/reducer'
import { cartReducer} from './cartReducer/reducer'

let middleware = [thunk]

const rootReducer = combineReducers({ authReducer, cartReducer, productReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))

