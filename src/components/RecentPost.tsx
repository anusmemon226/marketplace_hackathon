"use client"
import Image from 'next/image'
import React from 'react'
import RecentPostImage from "../app/assets/blog_images/image_2.jpg"
function RecentPost() {
    return (
        <div className='flex items-center my-8'>
            <Image src={RecentPostImage} style={{ width: 80, height: 80, objectFit: "cover" }} className='rounded-xl' alt='' />
            <div className='ml-3'>
                <p className='text-[14px] leading-[21px]'>Going all-in with millennial design</p>
                <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
            </div>
        </div>
    )
}

export default RecentPost