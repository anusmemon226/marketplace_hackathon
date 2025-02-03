import ProductCard from '@/components/ProductCard'
import React from 'react'

function RelatedProducts() {
  return (
    <div className='py-10'>
        <h1 className='text-center text-[36px] font-medium pb-6'>Related Products</h1>
        <div className='flex flex-wrap justify-center gap-y-4 gap-x-6'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/> 
        </div>
        <div className='flex justify-center py-8'>
            <button className='border border-[#B88E2F] text-[#B88E2F] py-3 px-16 text-[16px]'>Show More</button>
        </div>
    </div>
  )
}

export default RelatedProducts