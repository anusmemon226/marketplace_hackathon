import React from 'react'
import Image from 'next/image';
import RangeImg1 from '../app/assets/range_img_1.png'
import RangeImg2 from '../app/assets/range_img_2.png'
import RangeImg3 from '../app/assets/range_img_3.png'

function BrowseRange() {
    return (
        <div className='pt-14 px-5 sm:px-14 xl:w-[1240px] w-[95%] mx-auto'>
            <div className='flex flex-col items-center'>
                <h2 className={`sm:text-[32px] text-[26px] text-[#3A3A3A] font-bold text-center`}>Browse The Range</h2>
                <p className={`sm:text-[20px] text-[18px] text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex max-lg:flex-col justify-between gap-6 py-10'>
                <div className='w-[100%] lg:w-[33%]'>
                    <Image src={RangeImg3} alt='Dining' className='object-left rounded-2xl h-[300px] sm:h-[480px] max-lg:w-full' style={{objectFit:"cover"}}/>
                    <p className={`text-center font-semibold text-[24px] mt-6`}>Dining</p>
                </div>
                <div className='w-[100%] lg:w-[33%]'>
                    <Image src={RangeImg1} alt='Living' className='object-right rounded-2xl h-[300px] sm:h-[480px] max-lg:w-full' style={{objectFit:"cover"}}/>
                    <p className={`text-center font-semibold text-[24px] mt-6`}>Living</p>
                </div>
                <div className='w-[100%] lg:w-[33%]'>
                    <Image src={RangeImg2} alt='Bedroom' className='lg:object-[-5rem] rounded-2xl h-[300px] sm:h-[480px] max-lg:w-full' style={{objectFit:"cover"}}/>
                    <p className={`text-center font-semibold text-[24px] mt-6`}>Bedroom</p>
                </div>
            </div>
        </div>
    )
}

export default BrowseRange