"use client"
import React, { useEffect, useState } from 'react'
import CheckOutPaymentCart from './CheckOutPaymentCart'

type city = {
    _id: string,
    city_name: string,
    slug: {
        current:string
        _type:string
    },
    country: {
        _id: string,
        country_name: string
    }
}
type country = {
    _id: string,
    country_name: string,
    slug: {
        current:string
        _type:string
    }
}

function CheckoutForm() {
    const [isEmpty, setIsEmpty] = useState(false)
    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])
    const [citiesByCountry, setCitiesByCountry] = useState([])
    console.log(citiesByCountry)
    const [checkoutForm, setCheckoutForm] = useState({
        firstname: "",
        lastname: "",
        companyName: "",
        country: "",
        city: "",
        zipcode: "",
        phone: "",
        email: "",
        address: "",
        addition_info: ""
    })
    const fetchCountry = async () => {
        const data = await fetch("http://localhost:3000/api/country")
        const countries = await data.json()
        setCountries(countries)
    }
    const fetchCity = async () => {
        const data = await fetch("http://localhost:3000/api/city")
        const cities = await data.json()
        setCities(cities)
    }
    useEffect(() => {
        fetchCountry()
        fetchCity()
    }, [])

    return (
        <>
            <div className='flex flex-col w-[100%] md_lg:w-[50%] items-center py-6'>
                <div className='w-full px-5 sm:px-16'>
                    <h1 className='text-[36px] font-semibold'>Billing Details</h1>
                </div>
                <div className='flex max-sm:flex-col px-5 sm:px-16 my-4 w-full'>
                    <div className='flex flex-1 flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>First Name</label>
                        {isEmpty && checkoutForm.firstname == "" ? <p className='text-red-600'>Required...</p> : null}
                        <input value={checkoutForm.firstname} onChange={(e) => setCheckoutForm({ ...checkoutForm, firstname: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                    <div className='flex flex-1 flex-col sm:ml-6 max-sm:mt-8 max-sm:mb-4'>
                        <label htmlFor="" className='text-[16px] font-medium'>Last Name</label>
                        {isEmpty && checkoutForm.lastname == "" ? <p className='text-red-600'>Required...</p> : null}
                        <input value={checkoutForm.lastname} onChange={(e) => setCheckoutForm({ ...checkoutForm, lastname: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>Company Name (Optional)</label>
                        <input value={checkoutForm.companyName} onChange={(e) => setCheckoutForm({ ...checkoutForm, companyName: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>Country / Region</label>
                        {isEmpty && checkoutForm.country == "" ? <p className='text-red-600'>Required...</p> : null}
                        <select onChange={(e) => {
                            setCheckoutForm({ ...checkoutForm, country: e.target.value })
                            const filteredCities = cities.filter((city: city) => {
                                return city.country._id == e.target.value
                            })
                            setCitiesByCountry(filteredCities)
                        }} name="" id="" className='h-[75px] text-[#9F9F9F] w-full border border-[#9F9F9F] mt-6 rounded-xl px-4'>
                            <option>Select Country</option>
                            {
                                countries.length > 0 && countries.map((country: country) => {
                                    return (
                                        <option key={country._id} value={country._id}>{country.country_name}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>City</label>
                        {isEmpty && checkoutForm.city == "" ? <p className='text-red-600'>Required...</p> : null}
                        <select onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })} name="" id="" className='h-[75px] text-[#9F9F9F] w-full border border-[#9F9F9F] mt-6 rounded-xl px-4'>
                            <option value="">Select City</option>

                            {
                                citiesByCountry.length > 0 && checkoutForm.country && citiesByCountry.map((city: city) => {
                                    return <option key={city._id} value={city._id}>{city.city_name}</option>
                                })
                            }

                        </select>
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>Street Address</label>
                        {isEmpty && checkoutForm.address == "" ? <p className='text-red-600'>Required...</p> : null}
                        <input value={checkoutForm.address} onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                </div>

                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>Zip code</label>
                        {isEmpty && checkoutForm.zipcode == "" ? <p className='text-red-600'>Required...</p> : null}
                        <input value={checkoutForm.zipcode} onChange={(e) => setCheckoutForm({ ...checkoutForm, zipcode: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>Phone</label>
                        {isEmpty && checkoutForm.phone == "" ? <p className='text-red-600'>Required...</p> : null}
                        <input value={checkoutForm.phone} onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <label htmlFor="" className='text-[16px] font-medium'>Email Address</label>
                        {isEmpty && checkoutForm.email == "" ? <p className='text-red-600'>Required...</p> : null}
                        <input value={checkoutForm.email} onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                    </div>
                </div>
                <div className='flex px-5 sm:px-16 w-full my-4'>
                    <div className='flex w-full flex-col'>
                        <input value={checkoutForm.addition_info} onChange={(e) => setCheckoutForm({ ...checkoutForm, addition_info: e.target.value })} type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' placeholder='Additional Information' />
                    </div>
                </div>
            </div>
            <CheckOutPaymentCart formData={checkoutForm} setData={setCheckoutForm} setIsEmpty={setIsEmpty} />
        </>
    )
}

export default CheckoutForm