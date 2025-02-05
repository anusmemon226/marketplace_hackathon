"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Montserrat, Poppins } from 'next/font/google';
import Logo from '../app/assets/logo.png'
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import CartDrawer from './CartDrawer';
import { useStore } from '@/store';
import { cartProduct } from '@/types';

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
    const [cartCount, setCartCount] = useState(0)
    const { cartProducts, setProducts, setCartProducts } = useStore()
    const fetchProducts = async () => {
        const data = await fetch("/api/products")
        const resp = await data.json()
        setProducts(resp)
    }
    const setCartProductsIfExist = () => {
        const cartProducts: cartProduct[] = JSON.parse(localStorage.getItem("CartProducts")!)
        cartProducts?.map((cartProduct:cartProduct) => {
            setCartProducts(cartProduct)
        })
    }
    useEffect(() => {
        fetchProducts()
        window.addEventListener("resize", () => {
            setShowNavbar(false)
        })
        setCartProductsIfExist()
    }, [])

    useEffect(() => {
        setCartCount(cartProducts.length)
    }, [cartProducts])

    return (
        <div className=''>
            <div className='flex justify-between items-center xl:w-[1240px] md:w-[95%] max-md:px-5 mx-auto py-3 max-md:relative'>
                <Link href={"/"} className='flex items-center'>
                    <Image src={Logo} rel='preload' style={{ width: "60px", height: "auto" }} alt='Logo' priority />
                    <h1 className={`text-[23px] ${montserrat.className} -ml-1`}>Furniro</h1>
                </Link>
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
                        <div className='relative'>
                            <svg onClick={() => setShowDrawer(true)} width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2355 16.1926H7.95234L8.76991 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2894 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8764 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.377 2.07308 24.2383 2.07227L6.95702 2.01484L6.80937 1.32031C6.7164 0.877344 6.31718 0.554688 5.86328 0.554688H1.63867C1.38267 0.554688 1.13716 0.656381 0.956142 0.837398C0.775125 1.01841 0.673431 1.26393 0.673431 1.51992C0.673431 1.77592 0.775125 2.02143 0.956142 2.20245C1.13716 2.38346 1.38267 2.48516 1.63867 2.48516H5.08124L5.72656 5.55312L7.31523 13.2449L5.26992 16.5836C5.1637 16.727 5.09972 16.8972 5.08523 17.075C5.07073 17.2528 5.10629 17.4312 5.18788 17.5898C5.35195 17.9152 5.68281 18.1203 6.04921 18.1203H7.7664C7.40032 18.6065 7.20258 19.1988 7.20312 19.8074C7.20312 21.3551 8.46093 22.6129 10.0086 22.6129C11.5562 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.092 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.898 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1402 18.1203H24.2383C24.7687 18.1203 25.2035 17.6883 25.2035 17.1551C25.2019 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2355 16.1926ZM7.35898 3.91797L23.1035 3.96992L21.5613 12.6051L9.19374 12.627L7.35898 3.91797ZM10.0086 20.6715C9.53281 20.6715 9.14452 20.2832 9.14452 19.8074C9.14452 19.3316 9.53281 18.9434 10.0086 18.9434C10.4844 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7816 20.2564 10.6196 20.4184C10.4575 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.898 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.898 18.9434C19.3738 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.509 20.4184C19.347 20.5805 19.1272 20.6715 18.898 20.6715Z" fill="black" />
                            </svg>
                            <span className='absolute bottom-0 -right-1 bg-yellow-600 rounded-full text-[12px] px-[4px] text-white'>{cartCount}</span>
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    {
                        showNavbar ? <RxCross1 size={30} onClick={() => setShowNavbar(false)} /> : <RxHamburgerMenu size={30} onClick={() => setShowNavbar(true)} />
                    }
                </div>
            </div>
            <CartDrawer showDrawer={showDrawer} setShowDrawer={(status) => setShowDrawer(status)} />
        </div>
    )
}

export default Navbar