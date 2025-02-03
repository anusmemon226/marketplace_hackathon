"use client"
import Image from 'next/image'
import React from 'react'
import Logo from '../app/assets/logo.png'
function BreadCrumbHero({title}:{title:string}) {
    return (
        <div className='bg-cart_image bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col items-center bg-white/50 py-20 backdrop-blur-sm'>
                <Image src={Logo} alt='Logo' style={{ width: 78, height: 48, objectFit: "cover" }} />
                <h2 className='text-[48px] font-medium text-black'>{title}</h2>
                <div className='flex items-center gap-x-3'>
                    <p className='font-medium text-[16px] text-black'>Home</p>
                    <svg width="14" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
                    </svg>
                    <p className='text-[16px] text-black'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbHero