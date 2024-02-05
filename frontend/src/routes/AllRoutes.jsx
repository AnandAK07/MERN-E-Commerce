import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { ProductDetailsPage } from '../pages/ProductDetailsPage'
import { Checkout } from '../components/checkout/Checkout'
import { Signup } from '../components/authentication/Signup'
import { Login } from '../components/authentication/Login'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/product/:id' element={<ProductDetailsPage />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  )
}
