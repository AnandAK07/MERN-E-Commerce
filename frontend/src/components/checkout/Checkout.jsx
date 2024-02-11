import React, { useState } from 'react'
import axios from 'axios'

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
    const [details,setDetails]=useState({})
    // const apiUrl = process.env.REACT_APP_API_URL;
    const apiUrl = `http://localhost:8000`;


    const handleChange=(e)=>{
        const {name,value}=e.target
        console.log(name,value)
        setForm((prev)=>({...prev,[name]:value}))
    }


    const handleSunbmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('e-token');
        try {
            // Using Axios to make an HTTP request to the backend
            const response = await axios({
                method: 'post',
                url: `${apiUrl}/address/create`, // Backend API endpoint
                headers: {
                    Authorization: `Bearer ${token}` // Including the token in the request headers
                },
                data: form // Sending form data as the request body
            });
            const {address}=response.data;
            setDetails(address);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div class="min-w-screen min-h-screen bg-gray-50 py-5">
                <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                    <div class="w-full">
                        <div class="-mx-3 md:flex items-start">
                            <div class="px-3 md:w-7/12 lg:pr-10">

                                <form class="mb-6 pb-6 text-gray-800" onSubmit={handleSunbmit}>
                                    <h1 className='m-3 font-bold text-2xl'>Shipping information</h1>
                                    <div class="mb-3">
                                        <div className='flex w-full'>
                                            <div className='w-full m-2'>
                                                <label class="text-gray-600 font-semibold text-lg mb-2 ml-1">Full Name</label>
                                                <div>
                                                    <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" name='name' value={form.name} onChange={handleChange}/>
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


                            <div class="px-3 mt-10 md:w-5/12 border-t 1rem pt-4">
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
