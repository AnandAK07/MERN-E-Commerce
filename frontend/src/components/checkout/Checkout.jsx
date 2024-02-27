import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProduct } from '../../redux/cartReducer/action'

export const Checkout = () => {
    const [form, setForm] = useState({
        name: '',
        flatNo: '',
        area: '',
        landmark: '',
        townCity: '',
        pincode: '',
        state: '',
        country: '',
        mobile: '',
    })
    const [details, setDetails] = useState({})

    const dispatch = useDispatch()
    const { cart } = useSelector((store) => store.cartReducer)



    // Calculate total price for all products
    const totalPriceOfAllProducts = cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);

    console.log("Total Price of All Products:", totalPriceOfAllProducts);

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }


    const handleSunbmit = async (e) => {
        e.preventDefault();
        console.log(form)
        const token = localStorage.getItem('e-token');
        console.log(token)
        try {
            // Using Axios to make an HTTP request to the backend
            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/address/create`, // Backend API endpoint
                headers: {
                    Authorization: `Bearer ${token}` // Including the token in the request headers
                },
                data: form // Sending form data as the request body
            });
            const { address } = response.data;
            console.log(response)
            setDetails(address);
        } catch (error) {
            console.log(error);
        }
    }

    const checkoutHandler = async (amount) => {
        const token = localStorage.getItem('e-token');
        const productids = cart.map((product, id) => {
            return product.productId;
        }, [])



        const { data: { order } } = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_API_URL}/payment/checkout`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                productIds: productids,
                amount
            }
        })

        var options = {
            "key": "rzp_test_vaOTnJKV9rc05L", // Enter the Key ID generated from the Dashboard
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": order.currency,
            "name": "Anand",
            "description": "Test Transaction",
            "image": "https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.REACT_APP_API_URL}/payment/verification`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    useEffect(() => {
        getCartProduct(dispatch)
    }, [])

    return (
        <div class="min-w-screen min-h-screen bg-gray-50 ">
            <div class="w-full  px-5 text-gray-800">
                <div class="w-full">
                    <div class="-mx-3 md:flex items-start">
                        <div class="px-3 md:w-7/12 lg:pr-10">

                            <form class="mb-6 pb-6 text-gray-800" onSubmit={handleSunbmit}>
                                <h1 className='m-3 mb-10 font-bold text-2xl'>Shipping information</h1>
                                <div class="mb-3">
                                    <div className='flex w-full'>
                                        <div className='w-full m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Full Name</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" name='name' value={form.name} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3 ">
                                    <div className='flex w-full'>
                                        <div className='w-full m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Flat, House No., Building ,Apartment, etc.</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your Flat,House No." type="text" name='flatNo' value={form.flatNo} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 ">
                                    <div className='flex w-full'>
                                        <div className='w-6/12 m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Village,Area, Street</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your Area" type="text" name='area' value={form.area} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='w-6/12 m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Landmark</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your Landmark" type="text" name='landmark' value={form.landmark} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 ">
                                    <div className='flex w-full'>
                                        <div className='w-6/12 m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Town/city</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your Town/City" type="text" name='townCity' value={form.townCity} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='w-6/12 m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Pincode</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your Pincode" type="text" name='pincode' value={form.pincode} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 ">
                                    <div className='flex w-full'>
                                        <div className='w-6/12 m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">State</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your State" type="text" name='state' value={form.state} onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='w-6/12 m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Country</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your Country" type="text" name='country' value={form.country} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3 ">
                                    <div className='flex w-full'>
                                        <div className='w-full m-2'>
                                            <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Phone</label>
                                            <div>
                                                <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+91 8123X XXX XXX" type="text" name='mobile' value={form.mobile} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i>Submit Address</button>
                                </div>
                            </form>
                        </div>


                        <div class="px-3 mt-24 md:w-5/12 1rem pt-4 pb-4">
                            {/* dee */}
                            {cart.map((product) => (
                                <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                    <div class="w-full flex items-center">
                                        <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                            <img src={product.thumbnail} alt="" />
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-semibold uppercase text-gray-600">{product.title}</h6>
                                            <p class="text-gray-400">x {product.quantity}</p>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-600 text-xl">₹{product.price * product.quantity}</span><span class="font-semibold text-gray-600 text-sm">.00</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                            <div class="mb-6 pb-6 border-b border-gray-200">
                                <div class="-mx-2 flex items-end justify-end">
                                    <div class="flex-grow px-2 lg:max-w-xs">
                                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                        <div>
                                            <input class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                                        </div>
                                    </div>
                                    <div class="px-2">
                                        <button class="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                <div class="w-full flex mb-3 items-center">
                                    <div class="flex-grow">
                                        <span class="text-gray-600">Subtotal</span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-semibold">₹{totalPriceOfAllProducts}</span>
                                    </div>
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="flex-grow">
                                        <span class="text-gray-600">Shipping</span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-semibold">₹50</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                <div class="w-full flex items-center">
                                    <div class="flex-grow">
                                        <span class="text-gray-600">Total</span>
                                    </div>
                                    <div class="pl-3">
                                        <span class="font-semibold text-gray-400 text-sm">IN</span> <span class="font-semibold">₹{totalPriceOfAllProducts + 50}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                <div class="w-full flex mb-3 items-center">
                                    <div class="w-32">
                                        <span class="text-gray-600 font-semibold">Contact</span>
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <span>Scott Windon</span>
                                    </div>
                                </div>
                                <div class="w-full flex items-center">
                                    <div class="w-32">
                                        <span class="text-gray-600 font-semibold">Billing Address</span>
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <span>123 George Street, Sydney, NSW 2000 Australia</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => checkoutHandler(totalPriceOfAllProducts + 50)} class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1" ></i> PAY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
