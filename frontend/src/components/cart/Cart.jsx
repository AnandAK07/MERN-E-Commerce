
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProduct, removeFromCartProduct, updateCartProduct } from '../../redux/cartReducer/action'
import { Link, useNavigate } from 'react-router-dom'


export const Cart = () => {
    const { cart } = useSelector((store) => store.cartReducer)
    console.log(cart)


    const navigate = useNavigate();
    const dispatch = useDispatch()

    // Calculate total price for all products
    const totalPriceOfAllProducts = cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);


    const handleUpdate = async (id, value) => {
        try {
            await dispatch(updateCartProduct(id, value))
            await getCartProduct(dispatch)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await dispatch(removeFromCartProduct(id))
            await getCartProduct(dispatch)
        } catch (error) {
            console.log(error)
        }
    }

   
    useEffect(() => {
        getCartProduct(dispatch)
    }, [])
    return (
        <div>
            <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div class="rounded-lg md:w-2/3">
                    {cart?.map((product) => (
                        <div class="justify-between overflow-hidden h-52  mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src={product.thumbnail} alt={product.title} class="object-cover object-center w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">{product.title}</h2>
                                    <p class="mt-1 text-xs text-gray-700">{product.brand}</p>
                                </div>
                                <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                        <button className='focus:outline-none' disabled={product.quantity === 1 ? true : false} onClick={() => {
                                            if (product.quantity > 1) {
                                                handleUpdate(product.productId, -1);
                                            }
                                        }}>
                                            <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" > - </span>
                                        </button>
                                        {/* <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" /> */}
                                        <p style={{ padding: '1rem' }}>{product.quantity}</p>
                                        <button className='focus:outline-none' onClick={() => handleUpdate(product.productId, 1)}>
                                            <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" > + </span>
                                        </button>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm">₹ {product.price * product.quantity}</p>
                                        <div onClick={() => handleDelete(product.productId)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div class="mb-2 flex justify-between">
                        <p class="text-gray-700">Subtotal</p>
                        <p class="text-gray-700">₹{totalPriceOfAllProducts}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="text-gray-700">Shipping</p>
                        <p class="text-gray-700">₹50.00</p>
                    </div>
                    <hr class="my-4" />
                    <div class="flex justify-between">
                        <p class="text-lg font-bold">Total</p>
                        <div class="">
                            <p class="mb-1 text-lg font-bold">₹{totalPriceOfAllProducts + 50}</p>
                            <p class="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <Link to={'/checkout'}>
                        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}