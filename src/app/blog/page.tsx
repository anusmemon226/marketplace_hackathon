import BlogOverview from '@/components/BlogOverview'
import BreadCrumbHero from '@/components/BreadCrumbHero'
import RecentPost from '@/components/RecentPost'
import WhyUs from '@/components/WhyUs'
import React from 'react'

function page() {
    return (
        <div>
            <BreadCrumbHero title='Blog' />
            <div className='w-[90%] 2xl:w-[1240px] mx-auto py-16 flex max-lg:flex-col gap-x-8'>
                <div className='lg:w-[70%]'>
                    <BlogOverview />
                    <BlogOverview />
                    <BlogOverview />
                </div>
                <div className='flex flex-col items-center lg:w-[30%] px-3 sm:px-8'>
                    <div className='border border-black w-full flex py-3 px-2 rounded-lg border border-[#9F9F9F]'>
                        <input type="text" className='outline-none flex-1' />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className='w-full px-6 my-8'>
                        <h2 className='text-[24px] font-medium'>Categories</h2>
                        <div className='flex justify-between my-8'>
                            <p className='text-[16px] text-[#9F9F9F]'>Crafts</p>
                            <p className='text-[16px] text-[#9F9F9F]'>2</p>
                        </div>
                        <div className='flex justify-between my-8'>
                            <p className='text-[16px] text-[#9F9F9F]'>Design</p>
                            <p className='text-[16px] text-[#9F9F9F]'>8</p>
                        </div>
                        <div className='flex justify-between my-8'>
                            <p className='text-[16px] text-[#9F9F9F]'>Handmade</p>
                            <p className='text-[16px] text-[#9F9F9F]'>7</p>
                        </div>
                        <div className='flex justify-between my-8'>
                            <p className='text-[16px] text-[#9F9F9F]'>Interior</p>
                            <p className='text-[16px] text-[#9F9F9F]'>1</p>
                        </div>
                        <div className='flex justify-between my-8'>
                            <p className='text-[16px] text-[#9F9F9F]'>Wood</p>
                            <p className='text-[16px] text-[#9F9F9F]'>6</p>
                        </div>
                    </div>
                    <div className='w-full px-6 my-8'>
                        <h2 className='text-[24px] font-medium'>Recent Posts</h2>
                        <RecentPost/>
                        <RecentPost/>
                    </div>
                </div>

            </div>
            <WhyUs />
        </div>
    )
}

export default page