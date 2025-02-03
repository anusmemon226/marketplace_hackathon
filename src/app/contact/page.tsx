import BreadCrumbHero from '@/components/BreadCrumbHero'
import WhyUs from '@/components/WhyUs'
import React from 'react'

function page() {
    return (
        <div>
            <BreadCrumbHero title='Contact' />
            <div className='w-[75%] 2xl:w-[1240px] mx-auto pt-20'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-[36px] font-semibold text-center'>Get In Touch With Us</h2>
                    <p className='text-[16px] leading-[24px] text-[#9F9F9F] md:w-[644px] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className='flex max-md:flex-col py-16 gap-x-10'>
                    <div className='md:w-[45%]'>
                        <div className='flex my-3'>
                            <svg width="24" className='mt-2' height="24" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0.120083C8.08369 0.123473 5.28779 1.26659 3.22564 3.29867C1.16348 5.33075 0.00345217 8.08587 1.17029e-05 10.9597C-0.00348119 13.3081 0.774992 15.5929 2.21601 17.4634C2.21601 17.4634 2.51601 17.8527 2.56501 17.9088L11 27.7118L19.439 17.9039C19.483 17.8517 19.784 17.4634 19.784 17.4634L19.785 17.4605C21.2253 15.5907 22.0034 13.3071 22 10.9597C21.9966 8.08587 20.8365 5.33075 18.7744 3.29867C16.7122 1.26659 13.9163 0.123473 11 0.120083ZM11 14.9013C10.2089 14.9013 9.43553 14.6702 8.77773 14.237C8.11993 13.8039 7.60724 13.1883 7.30449 12.4681C7.00174 11.7478 6.92253 10.9553 7.07687 10.1907C7.23121 9.42608 7.61217 8.72374 8.17158 8.17249C8.73099 7.62124 9.44373 7.24583 10.2197 7.09374C10.9956 6.94165 11.7998 7.01971 12.5307 7.31804C13.2616 7.61638 13.8864 8.12159 14.3259 8.76979C14.7654 9.418 15 10.1801 15 10.9597C14.9987 12.0047 14.5768 13.0065 13.827 13.7454C13.0771 14.4843 12.0605 14.9 11 14.9013Z" fill="black" />
                            </svg>
                            <div className='ml-4 flex-1'>
                                <h2 className='text-[24px] font-medium'>Address</h2>
                                <p className='text-[16px]'>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className='flex my-3'>
                            <svg width="24" className='mt-2' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6086 18.425L17.5274 13.805C17.2872 13.5867 16.9715 13.4703 16.6471 13.4803C16.3227 13.4903 16.0149 13.626 15.7886 13.8587L12.7974 16.935C12.0774 16.7975 10.6299 16.3462 9.13986 14.86C7.64986 13.3687 7.19861 11.9175 7.06486 11.2025L10.1386 8.20999C10.3716 7.9839 10.5075 7.67602 10.5176 7.3515C10.5276 7.02698 10.411 6.71129 10.1924 6.47124L5.57361 1.39124C5.35492 1.15044 5.05096 1.00437 4.72631 0.984068C4.40165 0.963762 4.08186 1.07082 3.83486 1.28249L1.12236 3.60874C0.906253 3.82564 0.777264 4.11431 0.759864 4.41999C0.741114 4.73249 0.383614 12.135 6.12361 17.8775C11.1311 22.8837 17.4036 23.25 19.1311 23.25C19.3836 23.25 19.5386 23.2425 19.5799 23.24C19.8855 23.2229 20.174 23.0933 20.3899 22.8762L22.7149 20.1625C22.9274 19.9163 23.0352 19.5968 23.0154 19.2721C22.9955 18.9475 22.8495 18.6435 22.6086 18.425Z" fill="black" />
                            </svg>

                            <div className='ml-4 flex-1'>
                                <h2 className='text-[24px] font-medium'>Phone</h2>
                                <p className='text-[16px]'>Mobile: +(84) 546-6789</p>
                                <p className='text-[16px]'>Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className='flex my-3'>
                            <svg width="23" className='mt-2' height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z" fill="black" />
                            </svg>
                            <div className='ml-4 flex-1'>
                                <h2 className='text-[24px] font-medium'>Address</h2>
                                <p className='text-[16px]'>Monday-Friday: 9:00 - 22:00</p>
                                <p className='text-[16px]'>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[55%] py-5'>
                        <div className='mb-10'>
                            <p className='text-[16px] font-medium pb-4'>Your name</p>
                            <input type="text" placeholder='Abc' className='border border-[#9F9F9F] w-full h-[75px] rounded-lg pl-6' />
                        </div>
                        <div className='mb-10'>
                            <p className='text-[16px] font-medium pb-4'>Email Address</p>
                            <input type="text" placeholder='Abc@def.com' className='border border-[#9F9F9F] w-full h-[75px] rounded-lg pl-6' />
                        </div>
                        <div className='mb-10'>
                            <p className='text-[16px] font-medium pb-4'>Subject</p>
                            <input type="text" placeholder='This is an optional' className='border border-[#9F9F9F] w-full h-[75px] rounded-lg pl-6' />
                        </div>
                        <div className='mb-10'>
                            <p className='text-[16px] font-medium pb-4'>Message</p>
                            <textarea name="" id="" rows={5} placeholder='Hi! i’d like to ask about' className='border border-[#9F9F9F] w-full rounded-lg pl-6 pt-6'></textarea>
                        </div>
                        <button className='border border-[#B88E2F] bg-[#B88E2F] text-white text-[16px] py-4 px-20 rounded-lg'>Submit</button>
                    </div>
                </div>
            </div>
            <WhyUs />
        </div>
    )
}

export default page