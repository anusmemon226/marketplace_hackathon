import React from 'react'
function Hero() {
  return (
    <div className={`bg-hero_image bg-cover bg-no-repeat flex justify-end items-center sm:h-[600px] max-sm:py-10 max-sm:px-5 max-md:px-10`} style={{backgroundPosition:"center"}}>
      <div className='bg-[#FFF3E3]/70 md:bg-[#FFF3E3] w-[100%] md:w-[50%] py-12 px-5 sm:px-10 rounded-[10px] md:mr-10'>
        <p className={`font-semibold text-[16px] tracking-[3px]`}>New Arrival</p>
        <h1 className={`lg:pr-25 text-[#B88E2F] font-bold text-[36px] leading-[42px] sm:text-[45px] sm:leading-[52px] lg:text-[52px] lg:leading-[65px]`}>Discover Our New Collection</h1>
        <p className='text-[16px] lg:text-[18px] leading-[24px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis error adipisci impedit consectetur ratione iusto consequuntur debitis molestias neque.</p>
        <button className='bg-[#B88E2F] w-[100%] sm:w-[200px] text-white py-3 lg:py-5 text-[16px] font-bold mt-[25px]'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Hero