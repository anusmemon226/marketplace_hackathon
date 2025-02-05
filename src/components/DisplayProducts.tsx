"use client"
import { useStore } from '@/store'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { productData } from '@/types'

const DisplayProducts = () => {
    const { products } = useStore()
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const handleNextPage = ()=>{
        setCurrentPage(currentPage+1)
    }
    
    const handlePrevPage = ()=>{
        setCurrentPage(currentPage-1)
    }

    useEffect(() => {
        setTotalPage(Math.ceil(products.length / 10))
    }, [products])
    return (
        <>
            <div className='flex gap-8 justify-center flex-wrap py-6'>
                {
                    products.slice((currentPage-1)*10,currentPage*10).map((product: productData, index: number) => {
                        return <ProductCard key={index} data={product} />
                    })
                }
            </div>
            <div className='flex flex-wrap justify-center gap-x-8 py-10'>
                {
                    currentPage > 1 ?
                        <button onClick={handlePrevPage} className='bg-[#F9F1E7] rounded-[10px] text-[20px] px-6 py-3 my-2'>Prev</button>
                        :
                        null
                }
                {
                    Array.from({ length: totalPage }).map((_, index) => {
                        const isActive = currentPage == (index+1) ? true : false
                        return <button onClick={()=>setCurrentPage(index+1)} key={index} className={`${isActive?"bg-[#B88E2F]":"bg-[#F9F1E7]"} rounded-[10px] text-[20px] px-6 py-3 my-2`}>{index + 1}</button>
                    })
                }
                {
                    currentPage < totalPage ?
                        <button onClick={handleNextPage} className='bg-[#F9F1E7] rounded-[10px] text-[20px] text-center px-8 py-3 my-2'>Next</button>
                        : null
                }
            </div>
        </>
    )
}

export default DisplayProducts