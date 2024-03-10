import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { removeAllProductFromCart } from '../redux/cartReducer/action';

export const Success = () => {
  const navigate = useNavigate();
  // const dispatch=useDispatch();

  const removeProductsCart = () => {
    removeAllProductFromCart();
  }

  setTimeout(() => {
    navigate('/')
  }, 5000)

  useEffect(() => {
    removeProductsCart();
  }, [])
  return (
    <div className='flex justify-center align-baseline m-2'>
      <img className='' src="https://clipart-library.com/8300/2368/220029.gif" alt="Success" />
    </div>
  )
}
