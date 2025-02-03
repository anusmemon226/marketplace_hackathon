import React from 'react'

function Inspiration() {
    return (
        <div className='flex items-center py-10 border border-black w-[95%] xl:w-[1240px] mx-auto'>
            <div className='w-[40%]'>
                <h1 className='text-[40px] text-[#3A3A3A] leading-[48px] font-bold py-1'>50+ Beautiful rooms inspiration</h1>
                <p className='py-1 pr-14 text-[16px] leading-[24px] text-[#616161]'>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                <button className='my-4 bg-[#B88E2F] text-white py-3 px-8 font-semibold text-[16px]'>Explore More</button>
            </div>
            <div className='border border-black'>
                Carousel
            </div>
        </div>
    )
}

export default Inspiration