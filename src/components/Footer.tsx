import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='border-t border-black/20'>
            <div className='py-10 mx-auto w-[95%] xl:w-[1240px]'>
                <div className='flex flex-wrap'>
                    <div className='w-[100%] md:w-[50%] lg:w-[25%] max-md:pb-10 max-md:px-4'>
                        <h2 className='font-bold text-[24px]'>Funiro.</h2>
                        <div className='mt-8'>
                            <p className='text-[#9F9F9F] text-[16px] leading-[24px]'>400 University Drive Suite 200 Coral Gables,</p>
                            <p className='text-[#9F9F9F] text-[16px]'>FL 33134 USA</p>
                        </div>
                    </div>
                    <div className='flex lg:justify-center w-[100%] md:w-[50%] lg:w-[20%] max-md:pb-10 max-md:px-4'>
                        <div>
                            <p className='text-[#9F9F9F] text-[16px]'>Links</p>
                            <div className='flex flex-col mt-8'>
                                <Link href={"/"} className='font-medium text-[16px] mb-8'>Home</Link>
                                <Link href={"/shop"} className='font-medium text-[16px] mb-8'>Shop</Link>
                                <Link href={"/about"} className='font-medium text-[16px] mb-8'>About</Link>
                                <Link href={"/contact"} className='font-medium text-[16px] mb-8'>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-center w-[100%] md:w-[50%] lg:w-[20%] max-md:pb-10 max-md:px-4'>
                        <div>
                            <p className='text-[#9F9F9F] text-[16px]'>Help</p>
                            <div className='flex flex-col mt-8'>
                                <Link href={""} className='font-medium text-[16px] mb-8'>Payment Options</Link>
                                <Link href={""} className='font-medium text-[16px] mb-8'>Returns</Link>
                                <Link href={""} className='font-medium text-[16px] mb-8'>Privacy Policies</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] lg:w-[35%] max-md:pb-10 max-md:px-4'>
                        <p className='text-[#9F9F9F] text-[16px]'>Newsletter</p>
                        <div className='mt-8'>
                            <input type="text" placeholder='Enter Your Email Address' className='border-b border-black text-[14px] text-[#9F9F9F] w-[200px] focus:outline-none'/>
                            <input type="button" value="Subscribe" className='text-[14px] uppercase font-medium border-b border-black sm:ml-4 max-sm:mt-4'/>
                        </div>
                    </div>
                </div>
                <div className='pt-12'>
                    <p className='max-md:text-center'>2023 furino. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer