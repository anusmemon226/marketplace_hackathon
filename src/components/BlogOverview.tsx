"use client"
import Image from 'next/image'
import React from 'react'
import BlogImage from "../app/assets/blog_images/image_1.jpg"
function BlogOverview() {
    return (
        <div className='mb-10'>
            <Image src={BlogImage} className='h-[500px] max-md:h-[350px]' alt='blog_image' style={{objectFit: "cover" }} />
            <div className='flex flex-wrap py-2 gap-x-10'>
                <div className='flex items-center'>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99977 7.25C5.72977 7.25 5.26977 3.81 5.26977 3.81C4.99977 2.02 5.81977 0 7.96977 0C10.1298 0 10.9498 2.02 10.6798 3.81C10.6798 3.81 10.2698 7.25 7.99977 7.25ZM7.99977 9.82L10.7198 8C13.1098 8 15.2398 10.33 15.2398 12.53V15.02C15.2398 15.02 11.5898 16.15 7.99977 16.15C4.34977 16.15 0.759766 15.02 0.759766 15.02V12.53C0.759766 10.28 2.69977 8.05 5.22977 8.05L7.99977 9.82Z" fill="#9F9F9F" />
                    </svg>
                    <p className='text-[#9F9F9F] text-[16px] ml-2'>Admin</p>
                </div>
                <div className='flex items-center'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666992 14.8333C0.666992 16.25 1.75033 17.3333 3.16699 17.3333H14.8337C16.2503 17.3333 17.3337 16.25 17.3337 14.8333V8.16666H0.666992V14.8333ZM14.8337 2.33332H13.167V1.49999C13.167 0.99999 12.8337 0.666656 12.3337 0.666656C11.8337 0.666656 11.5003 0.99999 11.5003 1.49999V2.33332H6.50033V1.49999C6.50033 0.99999 6.16699 0.666656 5.66699 0.666656C5.16699 0.666656 4.83366 0.99999 4.83366 1.49999V2.33332H3.16699C1.75033 2.33332 0.666992 3.41666 0.666992 4.83332V6.49999H17.3337V4.83332C17.3337 3.41666 16.2503 2.33332 14.8337 2.33332Z" fill="#9F9F9F" />
                    </svg>
                    <p className='text-[#9F9F9F] text-[16px] ml-2'>14 Oct 2022</p>
                </div>
                <div className='flex items-center'>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.89664 18.968C9.36664 18.97 8.85664 18.758 8.48264 18.382L0.645639 10.547C0.441312 10.3434 0.283632 10.0978 0.183493 9.82723C0.0833546 9.55668 0.0431437 9.26762 0.0656389 8.98001L0.565639 2.41401C0.600182 1.93599 0.806166 1.48652 1.1457 1.14827C1.48524 0.810017 1.93549 0.60574 2.41364 0.573012L8.97964 0.0730116C9.03164 0.0620116 9.08264 0.0620117 9.13464 0.0620117C9.66464 0.0620117 10.1716 0.272012 10.5446 0.648012L18.3826 8.48201C18.5684 8.66774 18.7158 8.88825 18.8164 9.13096C18.917 9.37366 18.9687 9.6338 18.9687 9.89651C18.9687 10.1592 18.917 10.4194 18.8164 10.6621C18.7158 10.9048 18.5684 11.1253 18.3826 11.311L11.3106 18.382C11.1254 18.5683 10.905 18.716 10.6623 18.8166C10.4196 18.9172 10.1594 18.9687 9.89664 18.968ZM5.65364 3.65401C5.32475 3.65411 5.00096 3.73531 4.71094 3.89042C4.42093 4.04554 4.17364 4.26978 3.99099 4.54329C3.80834 4.8168 3.69596 5.13113 3.6638 5.45845C3.63164 5.78576 3.68069 6.11595 3.80662 6.41978C3.93255 6.72361 4.13146 6.99169 4.38574 7.20029C4.64002 7.40888 4.94181 7.55155 5.26439 7.61565C5.58698 7.67976 5.92039 7.66332 6.2351 7.56779C6.54982 7.47227 6.83611 7.30061 7.06864 7.06801L7.07564 7.06201L7.08264 7.05501L7.07464 7.06201C7.35263 6.78158 7.54138 6.42513 7.61711 6.03759C7.69284 5.65006 7.65216 5.24877 7.5002 4.88432C7.34824 4.51986 7.09179 4.20855 6.76318 3.98961C6.43457 3.77066 6.04851 3.65389 5.65364 3.65401Z" fill="#9F9F9F" />
                    </svg>
                    <p className='text-[#9F9F9F] text-[16px] ml-2'>Wood</p>
                </div>
            </div>
            <div className='py-2'>
                <h1 className='text-[30px] font-medium'>Going all-in with millennial design</h1>
            </div>
            <div className='py-2'>
                <p className='text-justify text-[#9F9F9F] text-[15px] leading-[22.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
            </div>
            <div className='py-1'>
                <button className='text-[16px] py-2 border-b border-black'>Read More</button>
            </div>
        </div>
    )
}

export default BlogOverview