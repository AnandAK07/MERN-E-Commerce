import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { ProductDetailsPage } from '../pages/ProductDetailsPage'
import { Checkout } from '../components/checkout/Checkout'
import { Signup } from '../components/authentication/Signup'
import { Login } from '../components/authentication/Login'
import { Cart } from '../components/cart/Cart'
import { PrivateRoute } from './PrivateRoute'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<PrivateRoute><ProductPage /></PrivateRoute>} />
      <Route path='/product/:id' element={<ProductDetailsPage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}
