import React from 'react'
import { Login } from '../components/authentication/Login';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';

export const PrivateRoute = ({children}) => {
    // const isAuth=false;
    const {isAuth}=useSelector((store)=>store.authReducer)
  console.log(isAuth)
    if(!isAuth){
        return <Navigate to='/login' element={<Login/>}/>
    }
  return children;
}
