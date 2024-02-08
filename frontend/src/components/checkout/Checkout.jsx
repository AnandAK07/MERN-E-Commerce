import React from 'react'

export const Checkout = () => {
    // <h1>Checkout</h1>
    // <main class="my-8">
    //     <div class="container mx-auto px-6">
    //         <h3 class="text-gray-700 text-2xl font-medium">Checkout</h3>
    //         <div class="flex flex-col lg:flex-row mt-8">
    //             <div class="w-full lg:w-1/2 order-2">
    //                 <div class="flex items-center">
    //                     <button class="flex text-sm text-blue-500 focus:outline-none"><span class="flex items-center justify-center text-white bg-blue-500 rounded-full h-5 w-5 mr-2">1</span> Contacts</button>
    //                     <button class="flex text-sm text-gray-700 ml-8 focus:outline-none"><span class="flex items-center justify-center border-2 border-blue-500 rounded-full h-5 w-5 mr-2">2</span> Shipping</button>
    //                     <button class="flex text-sm text-gray-500 ml-8 focus:outline-none" disabled><span class="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span> Payments</button>
    //                 </div>
    //                 <form class="mt-8 lg:w-3/4">
    //                     <div>
    //                         <h4 class="text-sm text-gray-500 font-medium">Delivery method</h4>
    //                         <div class="mt-6">
    //                             <button class="flex items-center justify-between w-full bg-white rounded-md border-2 border-blue-500 p-4 focus:outline-none">
    //                                 {/* <input type="radio" class="form-radio h-5 w-5 text-blue-600" checked><span class="ml-2 text-sm text-gray-700">MS Delivery</span> */}
    //                                 <label class="flex items-center">
    //                                     <input type="radio" className='form-radio h-5 w-5 text-blue-600' checked />
    //                                     <span className="ml-2 text-sm text-gray-700">MS Delivery</span>
    //                                 </label>

    //                                 <span class="text-gray-600 text-sm">$18</span>
    //                             </button>
    //                             <button class="mt-6 flex items-center justify-between w-full bg-white rounded-md border p-4 focus:outline-none">
    //                                 {/* <input type="radio" class="form-radio h-5 w-5 text-blue-600"><span class="ml-2 text-sm text-gray-700">DC Delivery</span> */}
    //                                 <label class="flex items-center">
    //                                     <input type="radio" className='form-radio h-5 w-5 text-blue-600' />
    //                                     <span class="ml-2 text-sm text-gray-700">DC Delivery</span>
    //                                 </label>

    //                                 <span class="text-gray-600 text-sm">$26</span>
    //                             </button>
    //                         </div>
    //                     </div>
    //                     <div class="mt-8">
    //                         <h4 class="text-sm text-gray-500 font-medium">Delivery address</h4>
    //                         <div class="mt-6 flex">
    //                             <label class="block w-3/12">
    //                                 <select class="form-select text-gray-700 mt-1 block w-full">
    //                                     <option>NY</option>
    //                                     <option>DC</option>
    //                                     <option>MH</option>
    //                                     <option>MD</option>
    //                                 </select>
    //                             </label>
    //                             {/* <input type="text" class="form-input mt-1 block w-full text-gray-700" placeholder="Address"> */}
    //                             <label class="block flex-1 ml-3">
    //                                 <input type="text" className='form-input mt-1 block w-full text-gray-700' placeholder="Address" />
    //                             </label>
    //                         </div>
    //                     </div>
    //                     <div class="mt-8">
    //                         <h4 class="text-sm text-gray-500 font-medium">Date</h4>
    //                         <div class="mt-6 flex">
    //                             {/* <input type="date" class="form-input mt-1 block w-full text-gray-700" placeholder="Date"> */}
    //                             <label class="block flex-1">
    //                                 <input type="date" className='form-input mt-1 block w-full text-gray-700' placeholder="Date" />
    //                             </label>
    //                         </div>
    //                     </div>
    //                     <div class="flex items-center justify-between mt-8">
    //                         <button class="flex items-center text-gray-700 text-sm font-medium rounded hover:underline focus:outline-none">
    //                             <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
    //                             <span class="mx-2">Back step</span>
    //                         </button>
    //                         <button class="flex items-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
    //                             <span>Payment</span>
    //                             <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    //                         </button>
    //                     </div>
    //                 </form>
    //             </div>
    //             <div class="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
    //                 <div class="flex justify-center lg:justify-end">
    //                     <div class="border rounded-md max-w-md w-full px-4 py-3">
    //                         <div class="flex items-center justify-between">
    //                             <h3 class="text-gray-700 font-medium">Order total (2)</h3>
    //                             <span class="text-gray-600 text-sm">Edit</span>
    //                         </div>
    //                         <div class="flex justify-between mt-6">
    //                             <div class="flex">
    //                                 <img className='h-20 w-20 object-cover rounded' src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="" />
    //                                 {/* <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt=""> */}
    //                                 <div class="mx-3">
    //                                     <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
    //                                     <div class="flex items-center mt-2">
    //                                         <button class="text-gray-500 focus:outline-none focus:text-gray-600">
    //                                             <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    //                                         </button>
    //                                         <span class="text-gray-700 mx-2">2</span>
    //                                         <button class="text-gray-500 focus:outline-none focus:text-gray-600">
    //                                             <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    //                                         </button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                             <span class="text-gray-600">20$</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </main>
    return (
        <div>
            <div class="min-w-screen min-h-screen bg-gray-50 py-5">
                {/* <div class="px-5">
                    <div class="mb-2">
                        <a href="#" class="focus:outline-none hover:underline text-gray-500 text-sm"><i class="mdi mdi-arrow-left text-gray-400"></i>Back</a>
                    </div>
                    <div class="mb-2">
                        <h1 class="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
                    </div>
                    <div class="mb-5 text-gray-400">
                        <a href="#" class="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" class="focus:outline-none hover:underline text-gray-500">Cart</a> / <span class="text-gray-600">Checkout</span>
                    </div>
                </div> */}
                <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                    <div class="w-full">
                        <div class="-mx-3 md:flex items-start">
                            <div class="px-3 md:w-7/12 lg:pr-10">

                                <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                    <h1 className='m-3 font-bold text-2xl'>Shipping information</h1>

                                    <div class="mb-3">
                                        <div className='flex w-full'>
                                            <div className='w-full m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Full Name</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3 ">
                                        <div className='flex w-full'>
                                            <div className='w-full m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Flat, House No., Building, Company ,Apartment, etc.</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 ">
                                        <div className='flex w-full'>
                                            <div className='w-6/12 m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Area, Street, Sector, Village</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                            <div className='w-6/12 m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Landmark</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 ">
                                        <div className='flex w-full'>
                                            <div className='w-6/12 m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Town/city</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                            <div className='w-6/12 m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Pincode</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 ">
                                        <div className='flex w-full'>
                                            <div className='w-6/12 m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">State</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                            <div className='w-6/12 m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Country</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 ">
                                        <div className='flex w-full'>
                                            <div className='w-full m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Phone</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                            <div class="px-3 md:w-5/12">
                                {/* dee */}
                                <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                    <div class="w-full flex items-center">
                                        <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                                        </div>
                                        <div class="flex-grow pl-3">
                                            <h6 class="font-semibold uppercase text-gray-600">Ray Ban Sunglasses.</h6>
                                            <p class="text-gray-400">x 1</p>
                                        </div>
                                        <div>
                                            <span class="font-semibold text-gray-600 text-xl">$210</span><span class="font-semibold text-gray-600 text-sm">.00</span>
                                        </div>
                                    </div>
                                </div>
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
                                            <span class="font-semibold">$190.91</span>
                                        </div>
                                    </div>
                                    <div class="w-full flex items-center">
                                        <div class="flex-grow">
                                            <span class="text-gray-600">Taxes (GST)</span>
                                        </div>
                                        <div class="pl-3">
                                            <span class="font-semibold">$19.09</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                    <div class="w-full flex items-center">
                                        <div class="flex-grow">
                                            <span class="text-gray-600">Total</span>
                                        </div>
                                        <div class="pl-3">
                                            <span class="font-semibold text-gray-400 text-sm">AUD</span> <span class="font-semibold">$210.00</span>
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
                                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                    <div class="w-full p-3 border-b border-gray-200">
                                        <div class="mb-5">
                                            <label for="type1" class="flex items-center cursor-pointer">
                                                <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3" />
                                            </label>
                                        </div>
                                        <div>
                                            <div class="mb-3">
                                                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                                                </div>
                                            </div>
                                            <div class="mb-3 -mx-2 flex items-end">
                                                <div class="px-2 w-1/4">
                                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                                    <div>
                                                        <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                            <option value="01">01 - January</option>
                                                            <option value="02">02 - February</option>
                                                            <option value="03">03 - March</option>
                                                            <option value="04">04 - April</option>
                                                            <option value="05">05 - May</option>
                                                            <option value="06">06 - June</option>
                                                            <option value="07">07 - July</option>
                                                            <option value="08">08 - August</option>
                                                            <option value="09">09 - September</option>
                                                            <option value="10">10 - October</option>
                                                            <option value="11">11 - November</option>
                                                            <option value="12">12 - December</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="px-2 w-1/4">
                                                    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                    </select>
                                                </div>
                                                <div class="px-2 w-1/4">
                                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                                    <div>
                                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-3">
                                        <label for="type2" class="flex items-center cursor-pointer">
                                            <input type="radio" class="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" class="ml-3" />
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-5">
                    {/* <div class="text-center text-gray-400 text-sm">
                        <a href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="focus:outline-none underline text-gray-400"><i class="mdi mdi-beer-outline"></i>Buy me a beer</a> and help support open-resource
                    </div> */}
                </div>
            </div>
        </div>
    )
}
