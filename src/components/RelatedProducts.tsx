import ProductCard from '@/components/ProductCard'
import { useStore } from '@/store'
import { useRouter } from 'next/navigation'
import React from 'react'

function RelatedProducts() {
  const { products } = useStore()
  const router = useRouter()
  return (
    <div className='py-10'>
      <h1 className='text-center text-[36px] font-medium pb-6'>Related Products</h1>
      <div className='flex flex-wrap justify-center gap-y-4 gap-x-6'>
        {
          products.map((product:any,index:any) => {
            return <ProductCard key={index} data={product}/>

          })
        }
      </div>
      <div className='flex justify-center py-8'>
        <button onClick={()=>router.push("/shop")} className='border border-[#B88E2F] text-[#B88E2F] py-3 px-16 text-[16px]'>Show More</button>
      </div>
    </div>
  )
}

export default RelatedProducts