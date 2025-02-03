"use client"
import BreadCrumbHero from '@/components/BreadCrumbHero'
import CheckoutForm from '@/components/CheckoutForm'
import WhyUs from '@/components/WhyUs'
import React, { useState } from 'react'

function page() {
    const [form,setForm] = useState({
        firstname:"",
        lastname:"",
        companyName:"",
        country:"",
        address:"",
        province:"",
        zipCode:"",
        emailAddress:"",
        additional:""
    })
    return (
        <div>
            <BreadCrumbHero title='Checkout' />
            <div className='w-[95%] 2xl:w-[1240px] mx-auto flex max-md_lg:flex-col justify-between py-14'>
                <CheckoutForm />
                <div className='flex-1 py-16 px-8'>
                    <div className='flex flex-wrap justify-between items-center'>
                        <p className='text-[24px] font-medium'>Product</p>
                        <p className='text-[24px] font-medium'>Subtotal</p>
                    </div>
                    {

                    }
                    <div className='flex flex-wrap justify-between items-center my-3'>
                        <div className='flex items-center gap-x-4'>
                            <p className='text-[16px] text-[#9F9F9F]'>Asgaard sofa</p>
                            <span className='text-[12px] font-medium'>x 1</span>
                        </div>
                        <p className='text-[16px] '>Rs. 250,000.00</p>
                    </div>
                    <div className='flex flex-wrap justify-between items-center my-3'>
                        <p className='text-[16px]'>Subtotal</p>
                        <p className='text-[16px] '>Rs. 250,000.00</p>
                    </div>
                    <div className='flex flex-wrap justify-between items-center my-3'>
                        <p className='text-[16px]'>Total</p>
                        <p className='text-[24px] text-[#B88E2F] font-bold'>Rs. 250,000.00</p>
                    </div>
                    <div className='flex items-center mt-14'>
                        <input type="radio" name="payment_method" value="direct" defaultChecked id="" className='accent-black' />
                        <h2 className='text-[16px] ml-4'>Direct Bank Transfer</h2>
                    </div>
                    <div>
                        <p className='text-[16px] text-[#9F9F9F] text-justify py-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                    <div className='flex items-center mt-2'>
                        <input type="radio" name="payment_method" value="cash" id="" className='accent-black' />
                        <h2 className='text-[16px] ml-4 text-[#9F9F9F]'>Cash on Delivery</h2>
                    </div>
                    <div>
                        <p className='text-justify text-[16px] py-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <button className='border border-black text-[20px] py-4 w-[320px] rounded-xl'>Place Order</button>
                    </div>
                </div>
            </div>
            <WhyUs />
        </div>
    )
}

export default page