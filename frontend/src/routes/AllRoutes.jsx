import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Signup } from '../components/authentication/Signup'
import { Login } from '../components/authentication/Login'
import { PrivateRoute } from './PrivateRoute'
import { Failure } from '../pages/Failure'
import { Success } from '../pages/Success'
import { Loading } from '../components/Loading'
const ContactUsPage =lazy(()=>import('../pages/ContactUsPage'))







const ProductPage =lazy(() => import('../pages/ProductPage'))  
const HomePage = lazy(() => import('../pages/HomePage'))
const ProductDetailsPage = lazy(() => import('../pages/ProductDetailsPage'))
const CartPage = lazy(() => import('../pages/CartPage')) 
const CheckoutPage = lazy(() => import('../pages/CheckoutPage')) 

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Suspense fallback={<Loading />}><HomePage /></Suspense>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/product' element={<Suspense fallback={<Loading />}><PrivateRoute><ProductPage /></PrivateRoute></Suspense>} />
      <Route path='/product/:id' element={<Suspense fallback={<Loading />}><PrivateRoute><ProductDetailsPage /></PrivateRoute></Suspense>} />
      <Route path='/checkout' element={<Suspense fallback={<Loading />}><PrivateRoute><CheckoutPage /></PrivateRoute></Suspense>} />
      <Route path='/cart' element={<Suspense fallback={<Loading />}><PrivateRoute><CartPage /></PrivateRoute></Suspense>} />
      <Route path='/contactus' element={<Suspense fallback={<Loading/>}><ContactUsPage /></Suspense>}/>
      <Route path='/success' element={<Success />} />
      <Route path='/failure' element={<Failure />} />
    </Routes>
  )
}
