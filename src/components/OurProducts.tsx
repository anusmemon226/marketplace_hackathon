"use client"
import ProductCard from '@/components/ProductCard'
import { useStore } from '@/store'
import { useRouter } from 'next/navigation'
import React from 'react'

function OurProducts() {
  const router = useRouter()
  const {products} = useStore()
  return (
    <div className='py-6 xl:w-[1240px] w-[95%] mx-auto'>
      <div className='flex flex-col items-center'>
        <h2 className={`text-[40px] font-bold text-[#3A3A3A]`}>Our Products</h2>
      </div>
      <div className='flex gap-8 justify-center flex-wrap pt-8'>
        {
          products.map((product:any,index:any) => {
            return (index < 4) ? <ProductCard key={index} data={product}/> : null  
          })
        }

      </div>
      <div className='flex justify-center pt-8'>
        <button onClick={()=>router.push("/shop")} className='border border-[#B88E2F] w-[245px] font-semibold text-[#B88E2F] text-[16px] py-3'>Show More</button>
      </div>
    </div>
  )
}

export default OurProducts