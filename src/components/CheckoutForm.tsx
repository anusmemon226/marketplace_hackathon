import React from 'react'

function CheckoutForm() {
    return (
        <div className='flex flex-col w-[100%] md_lg:w-[50%] items-center py-6'>
            <div className='w-full px-5 sm:px-16'>
                <h1 className='text-[36px] font-semibold'>Billing Details</h1>
            </div>
            <div className='flex max-sm:flex-col px-5 sm:px-16 my-4 w-full'>
                <div className='flex flex-1 flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>First Name</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
                <div className='flex flex-1 flex-col sm:ml-6 max-sm:mt-8 max-sm:mb-4'>
                    <label htmlFor="" className='text-[16px] font-medium'>Last Name</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Company Name (Optional)</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Country / Region</label>
                    <select name="" id="" className='h-[75px] text-[#9F9F9F] w-full border border-[#9F9F9F] mt-6 rounded-xl px-4'>
                        <option value="">Sri Lanka</option>
                        <option value="">Pakistan</option>
                        <option value="">India</option>
                        <option value="">Bangladesh</option>
                    </select>
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Street Address</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Province</label>
                    <select name="" id="" className='h-[75px] text-[#9F9F9F] w-full border border-[#9F9F9F] mt-6 rounded-xl px-4'>
                        <option value="">West Province</option>
                        <option value="">Pakistan</option>
                        <option value="">India</option>
                        <option value="">Bangladesh</option>
                    </select>
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Zip code</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Phone</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <label htmlFor="" className='text-[16px] font-medium'>Email Address</label>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' />
                </div>
            </div>
            <div className='flex px-5 sm:px-16 w-full my-4'>
                <div className='flex w-full flex-col'>
                    <input type="text" className='h-[75px] w-full border border-[#9F9F9F] mt-6 rounded-xl px-2' placeholder='Additional Information' />
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm