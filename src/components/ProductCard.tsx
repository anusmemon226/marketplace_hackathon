"use client"
import React, { useState } from 'react'
import { urlFor } from '@/utils/sanityImageBuilder'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function ProductCard({ data }: any) {
    const router = useRouter()
    const productImageUrl = data?.main_image
        ? urlFor(data.main_image)?.url()
        : null;
    const [showPopup, setShowPopup] = useState(false)
    return (
        <div className='w-[285px] relative' onMouseLeave={() => setShowPopup(false)} onMouseEnter={() => setShowPopup(true)}>
            <div className='flex justify-center items-center bg-[#E97171] absolute top-5 right-5 rounded-full w-[48px] h-[48px]'>
                <p className='text-white text-[16px]'>-30%</p>
            </div>
            {productImageUrl && (
                <Image src={productImageUrl} width={300} height={300} className="m-auto" style={{width:"300px",height:"300px",objectFit:"contain"}} alt='Dining'/>
            )}
            <div className='bg-[#F4F5F7] p-4'>
                <h2 className='font-semibold text-[24px] py-1'>{data?.product_name}</h2>
                <p className='text-[16px] font-medium text-[#898989] py-1'></p>
                <div className='flex flex-wrap items-center justify-between py-1'>
                    <p className='font-bold text-[20px]'>${data?.price}</p>
                    <span className='text-[#B0B0B0] text-[16px] font-regular'><s>${Number(parseFloat(data?.price) + (parseFloat(data?.price) * 0.10)).toFixed(2)}</s></span>
                </div>
            </div>
            {showPopup && (
                <div className='flex flex-col justify-center items-center absolute top-0 left-0 bg-[#3A3A3A]/80 w-full h-full'>
                    <button onClick={() => router.push(`/shop/${data?.slug.current}`)} className='bg-white text-[#B88E2F] text-[16px] font-semibold w-[80%] px-14 py-3 my-0.5'>View Product</button>
                    <div className='flex flex-wrap justify-between items-center gap-5 mt-6 px-2'>
                        <div className='flex items-center cursor-pointer'>
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9.66671C9.47467 9.66671 9 9.87337 8.644 10.2047L3.94 7.46671C3.97333 7.31337 4 7.16004 4 7.00004C4 6.84004 3.97333 6.68671 3.94 6.53337L8.64 3.79337C9 4.12671 9.47333 4.33337 10 4.33337C11.1067 4.33337 12 3.44004 12 2.33337C12 1.22671 11.1067 0.333374 10 0.333374C8.89333 0.333374 8 1.22671 8 2.33337C8 2.49337 8.02667 2.64671 8.06 2.80004L3.36 5.54004C3 5.20671 2.52667 5.00004 2 5.00004C0.893333 5.00004 0 5.89337 0 7.00004C0 8.10671 0.893333 9.00004 2 9.00004C2.52667 9.00004 3 8.79337 3.36 8.46004L8.05867 11.2054C8.02112 11.3563 8.00143 11.5112 8 11.6667C8 12.0623 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5145C9.60009 13.6658 10.0022 13.7054 10.3902 13.6283C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0569C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5359 11.44 10.2235 11.1111 10.0038C10.7822 9.784 10.3956 9.66671 10 9.66671Z" fill="white" />
                            </svg>
                            <p className='text-white font-semibold text-[16px] pl-0.5'>Share</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.08004 6L10.08 7L13.52 3.55L10 0L9.00004 1L10.8 2.8H1.00004V4.2H10.82L9.08004 6ZM4.86004 8L3.86004 7L0.420044 10.5L3.91004 14L4.91004 13L3.10004 11.2H13V9.8H3.10004L4.86004 8Z" fill="white" />
                            </svg>
                            <p className='text-white font-semibold text-[16px] pl-0.5'>Compare</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <svg width="18" height="18" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8" />
                            </svg>
                            <p className='text-white font-semibold text-[16px] pl-0.5'>Like</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductCard