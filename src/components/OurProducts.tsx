import ProductCard from '@/components/ProductCard'
import React from 'react'

const fetchProducts = async () => {
  const resp = await fetch("http://localhost:3000/api/products")
  const products = await resp.json()
  return products
}

async function OurProducts() {
  const products = await fetchProducts()
  return (
    <div className='py-6 xl:w-[1240px] w-[95%] mx-auto'>
      <div className='flex flex-col items-center'>
        <h2 className={`text-[40px] font-bold text-[#3A3A3A]`}>Our Products</h2>
      </div>
      <div className='flex gap-8 justify-center flex-wrap pt-8'>
        {
          products.map((item: any,index:any) => {
            return <ProductCard key={index} data={item} />
          })
        }
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
      <div className='flex justify-center pt-8'>
        <button className='border border-[#B88E2F] w-[245px] font-semibold text-[#B88E2F] text-[16px] py-3'>Show More</button>
      </div>
    </div>
  )
}

export default OurProducts