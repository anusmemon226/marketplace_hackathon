"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Montserrat, Poppins } from 'next/font/google';
import Logo from '../app/assets/logo.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import CartImage from "../app/assets/addedToCart.jpg"
import { urlFor } from '@/utils/sanityImageBuilder';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: "700"
});
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "500"
});

function Navbar() {
    const [showDrawer, setShowDrawer] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const router = useRouter()

    const [cartProducts, setCartProducts] = useState<any>([])
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let storageCartProducts: string | null = localStorage.getItem("CartProducts")
        storageCartProducts = storageCartProducts != null ? JSON.parse(storageCartProducts) : null
        if (storageCartProducts != null) {
            setCartProducts(storageCartProducts)
            if (Array.isArray(storageCartProducts)) {
                const total = storageCartProducts.reduce((sum, product) => {
                    return sum + Number(product.price)
                }, 0)
                setSubTotal(total.toFixed(2))
                setTotal(total.toFixed(2))
            }
        } else {
            setCartProducts([])
        }
    }, [])
    return (
        <div className=''>
            <div className='flex justify-between items-center xl:w-[1240px] md:w-[95%] max-md:px-5 mx-auto py-3 max-md:relative'>
                <div className='flex items-center'>
                    <Image src={Logo} width={50} height={32} alt='Logo' />
                    <h1 className={`text-[23px] ${montserrat.className} -ml-1`}>Furniro</h1>
                </div>
                <div className={`${showNavbar ? "flex" : "hidden"} max-md:z-10 md:flex flex-1 justify-end items-center max-md:flex-col max-md:absolute max-md:top-[100%] max-md:left-0 max-md:w-full max-md:bg-white max-md:py-5 max-md:border border-black/20`}>
                    <div className='flex justify-center w-full max-md:flex-col max-md:text-center'>
                        <Link href={"/"} onClick={() => setShowNavbar(false)} className={`mx-4 lg:mx-8 text-[16px] max-md:py-2 ${poppins.className}`} >Home</Link>
                        <Link href={"/shop"} onClick={() => setShowNavbar(false)} className={`mx-4 lg:mx-8 text-[16px] max-md:py-2 ${poppins.className}`} >Shop</Link>
                        <Link href={"/blog"} onClick={() => setShowNavbar(false)} className={`mx-4 lg:mx-8 text-[16px] max-md:py-2 ${poppins.className}`} >Blog</Link>
                        <Link href={"/contact"} onClick={() => setShowNavbar(false)} className={`mx-4 lg:mx-8 text-[16px] max-md:py-2 ${poppins.className}`} >Contact</Link>
                    </div>
                    <div className='flex max-md:py-3 items-center gap-8'>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3333 10V4.16669H23.6666V11.1667H21.3333M21.3333 15.8334H23.6666V13.5H21.3333M9.66665 11.1667C12.7816 11.1667 19 12.73 19 15.8334V19.3334H0.333313V15.8334C0.333313 12.73 6.55165 11.1667 9.66665 11.1667ZM9.66665 0.666687C10.9043 0.666687 12.0913 1.15835 12.9665 2.03352C13.8416 2.90869 14.3333 4.09568 14.3333 5.33335C14.3333 6.57103 13.8416 7.75802 12.9665 8.63319C12.0913 9.50836 10.9043 10 9.66665 10C8.42897 10 7.24198 9.50836 6.36682 8.63319C5.49164 7.75802 4.99998 6.57103 4.99998 5.33335C4.99998 4.09568 5.49164 2.90869 6.36682 2.03352C7.24198 1.15835 8.42897 0.666687 9.66665 0.666687ZM9.66665 13.3834C6.20165 13.3834 2.54998 15.0867 2.54998 15.8334V17.1167H16.7833V15.8334C16.7833 15.0867 13.1316 13.3834 9.66665 13.3834ZM9.66665 2.88335C9.01687 2.88335 8.3937 3.14148 7.93424 3.60094C7.47477 4.06041 7.21665 4.68357 7.21665 5.33335C7.21665 5.98313 7.47477 6.6063 7.93424 7.06577C8.3937 7.52523 9.01687 7.78335 9.66665 7.78335C10.3164 7.78335 10.9396 7.52523 11.3991 7.06577C11.8585 6.6063 12.1166 5.98313 12.1166 5.33335C12.1166 4.68357 11.8585 4.06041 11.3991 3.60094C10.9396 3.14148 10.3164 2.88335 9.66665 2.88335Z" fill="black" />
                        </svg>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 24.5L19.2663 19.257M22.1666 12.25C22.1666 14.88 21.1219 17.4024 19.2621 19.2621C17.4024 21.1219 14.88 22.1666 12.25 22.1666C9.61992 22.1666 7.09757 21.1219 5.23784 19.2621C3.3781 17.4024 2.33331 14.88 2.33331 12.25C2.33331 9.61992 3.3781 7.09757 5.23784 5.23784C7.09757 3.3781 9.61992 2.33331 12.25 2.33331C14.88 2.33331 17.4024 3.3781 19.2621 5.23784C21.1219 7.09757 22.1666 9.61992 22.1666 12.25V12.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.16668 1.5C3.94551 1.5 1.33334 4.08533 1.33334 7.275C1.33334 9.84983 2.35418 15.9608 12.4027 22.1383C12.5827 22.2479 12.7893 22.3058 13 22.3058C13.2107 22.3058 13.4173 22.2479 13.5973 22.1383C23.6458 15.9608 24.6667 9.84983 24.6667 7.275C24.6667 4.08533 22.0545 1.5 18.8333 1.5C15.6122 1.5 13 5 13 5C13 5 10.3878 1.5 7.16668 1.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg onClick={() => setShowDrawer(true)} width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2355 16.1926H7.95234L8.76991 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2894 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8764 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.377 2.07308 24.2383 2.07227L6.95702 2.01484L6.80937 1.32031C6.7164 0.877344 6.31718 0.554688 5.86328 0.554688H1.63867C1.38267 0.554688 1.13716 0.656381 0.956142 0.837398C0.775125 1.01841 0.673431 1.26393 0.673431 1.51992C0.673431 1.77592 0.775125 2.02143 0.956142 2.20245C1.13716 2.38346 1.38267 2.48516 1.63867 2.48516H5.08124L5.72656 5.55312L7.31523 13.2449L5.26992 16.5836C5.1637 16.727 5.09972 16.8972 5.08523 17.075C5.07073 17.2528 5.10629 17.4312 5.18788 17.5898C5.35195 17.9152 5.68281 18.1203 6.04921 18.1203H7.7664C7.40032 18.6065 7.20258 19.1988 7.20312 19.8074C7.20312 21.3551 8.46093 22.6129 10.0086 22.6129C11.5562 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.092 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.898 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1402 18.1203H24.2383C24.7687 18.1203 25.2035 17.6883 25.2035 17.1551C25.2019 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2355 16.1926ZM7.35898 3.91797L23.1035 3.96992L21.5613 12.6051L9.19374 12.627L7.35898 3.91797ZM10.0086 20.6715C9.53281 20.6715 9.14452 20.2832 9.14452 19.8074C9.14452 19.3316 9.53281 18.9434 10.0086 18.9434C10.4844 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7816 20.2564 10.6196 20.4184C10.4575 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.898 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.898 18.9434C19.3738 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.509 20.4184C19.347 20.5805 19.1272 20.6715 18.898 20.6715Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className='md:hidden'>
                    {
                        showNavbar ? <RxCross1 size={30} onClick={() => setShowNavbar(false)} /> : <RxHamburgerMenu size={30} onClick={() => setShowNavbar(true)} />
                    }
                </div>
            </div>


            <div className={`bg-black/20 transition-all duration-500 ${showDrawer ? "visible opacity-1" : "invisible opacity-0"} w-full h-full absolute top-0 z-10 overflow-hidden`} onClick={() => setShowDrawer(false)}>
                <div onClick={(e) => e.stopPropagation()} className={`z-20 flex flex-col h-full w-[100%] sm:w-[75%] md:w-[50%] lg:w-[30%] px-6 py-6 bg-white absolute right-0 transition-all duration-500 ${showDrawer ? "translate-x-[0]" : "translate-x-[100%]"}`}>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[24px] font-semibold'>Shopping Cart</h1>
                        <svg onClick={() => setShowDrawer(false)} className='cursor-pointer' width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.11047 9.6734C6.16563 9.6181 6.23115 9.57424 6.30328 9.5443C6.37542 9.51437 6.45275 9.49896 6.53085 9.49896C6.60894 9.49896 6.68628 9.51437 6.75841 9.5443C6.83055 9.57424 6.89607 9.6181 6.95122 9.6734L8.3121 11.0355L9.67297 9.6734C9.78446 9.56191 9.93568 9.49927 10.0933 9.49927C10.251 9.49927 10.4022 9.56191 10.5137 9.6734C10.6252 9.78489 10.6878 9.9361 10.6878 10.0938C10.6878 10.2514 10.6252 10.4027 10.5137 10.5141L9.15166 11.875L10.5137 13.2359C10.6252 13.3474 10.6878 13.4986 10.6878 13.6563C10.6878 13.8139 10.6252 13.9652 10.5137 14.0766C10.4022 14.1881 10.251 14.2508 10.0933 14.2508C9.93568 14.2508 9.78446 14.1881 9.67297 14.0766L8.3121 12.7146L6.95122 14.0766C6.83973 14.1881 6.68852 14.2508 6.53085 14.2508C6.37318 14.2508 6.22196 14.1881 6.11047 14.0766C5.99898 13.9652 5.93635 13.8139 5.93635 13.6563C5.93635 13.4986 5.99898 13.3474 6.11047 13.2359L7.47253 11.875L6.11047 10.5141C6.05518 10.459 6.01131 10.3935 5.98137 10.3213C5.95144 10.2492 5.93604 10.1719 5.93604 10.0938C5.93604 10.0157 5.95144 9.93834 5.98137 9.86621C6.01131 9.79407 6.05518 9.72855 6.11047 9.6734Z" fill="#9F9F9F" />
                            <path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" fill="#9F9F9F" />
                        </svg>
                    </div>
                    <div className='mt-16'>

                        {
                            cartProducts.map((product: any, index: any) => {
                                const mainProductImage = product.main_image
                                    ? urlFor(product.main_image)?.width(105).height(105).url()
                                    : null;
                                return (<div key={index} className='flex justify-between items-center my-3'>
                                    <div className='flex flex-1 flex-wrap items-center'>
                                        <img src={mainProductImage?mainProductImage:""}/>
                                        <div className=''>
                                            <p>{product.product_name}</p>
                                            <p>1 x ${product.price}</p>
                                        </div>
                                    </div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47727 0 0 4.47727 0 10C0 15.5227 4.47727 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47727 15.5227 0 10 0ZM13.37 7.91545C13.5356 7.744 13.6272 7.51436 13.6252 7.276C13.6231 7.03764 13.5275 6.80963 13.3589 6.64107C13.1904 6.47252 12.9624 6.37691 12.724 6.37484C12.4856 6.37277 12.256 6.4644 12.0845 6.63L10 8.71455L7.91545 6.63C7.83159 6.54317 7.73128 6.47392 7.62037 6.42627C7.50946 6.37863 7.39016 6.35355 7.26946 6.3525C7.14875 6.35145 7.02904 6.37445 6.91731 6.42016C6.80559 6.46587 6.70409 6.53338 6.61873 6.61873C6.53338 6.70409 6.46587 6.80559 6.42016 6.91731C6.37445 7.02904 6.35145 7.14875 6.3525 7.26946C6.35355 7.39016 6.37863 7.50946 6.42627 7.62037C6.47392 7.73128 6.54317 7.83159 6.63 7.91545L8.71455 10L6.63 12.0845C6.54317 12.1684 6.47392 12.2687 6.42627 12.3796C6.37863 12.4905 6.35355 12.6098 6.3525 12.7305C6.35145 12.8513 6.37445 12.971 6.42016 13.0827C6.46587 13.1944 6.53338 13.2959 6.61873 13.3813C6.70409 13.4666 6.80559 13.5341 6.91731 13.5798C7.02904 13.6255 7.14875 13.6486 7.26946 13.6475C7.39016 13.6465 7.50946 13.6214 7.62037 13.5737C7.73128 13.5261 7.83159 13.4568 7.91545 13.37L10 11.2855L12.0845 13.37C12.256 13.5356 12.4856 13.6272 12.724 13.6252C12.9624 13.6231 13.1904 13.5275 13.3589 13.3589C13.5275 13.1904 13.6231 12.9624 13.6252 12.724C13.6272 12.4856 13.5356 12.256 13.37 12.0845L11.2855 10L13.37 7.91545Z" fill="#9F9F9F" />
                                    </svg>
                                </div>)
                            })
                        }

                    </div>
                    <div className='mt-auto'>
                        <div className='flex flex-wrap justify-between'>
                            <p className='text-[14px]'>Subtotal</p>
                            <p className='text-[16px] text-[#B88E2F] font-semibold'>Rs. 520,000.00</p>
                        </div>
                        <div className='flex flex-wrap gap-x-4 gap-y-4 justify-between mt-10 mb-5'>
                            <button onClick={() => {
                                setShowDrawer(false)
                                router.push("../cart")
                            }} className='rounded-full border border-black text-[12px] py-1 px-5'>Cart</button>
                            <button onClick={() => {
                                setShowDrawer(false)
                                router.push("../checkout")
                            }} className='rounded-full border border-black text-[12px] py-1 px-5'>Checkout</button>
                            <button className='rounded-full border border-black text-[12px] py-1 px-5'>Comparison</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar