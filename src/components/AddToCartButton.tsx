"use client"
import { useStore } from '@/store'
import React from 'react'

const AddToCartButton = ({ productData,variation,quantity }: any) => {
    const { setCartProducts } = useStore()
    const addToCart = () => {
        const cartProducts = localStorage.getItem("CartProducts")
        if (cartProducts == null) {
            localStorage.setItem("CartProducts", JSON.stringify([{productData,variation,quantity}]))
            setCartProducts({productData,variation,quantity})
            alert("Added To Cart...!")
        } else {
            let previousProducts = JSON.parse(cartProducts)
            const isExist = previousProducts.filter((product: any) => product.productData.slug.current == productData.slug.current)
            if (isExist.length > 0) {
                alert("Product Already In Cart..!")
            } else {
                previousProducts = [...previousProducts, {productData,variation,quantity}]
                localStorage.setItem("CartProducts", JSON.stringify(previousProducts))
                setCartProducts({productData,variation,quantity})
                alert("Added To Cart...!")
            }
        }
    }

    return (
        <button onClick={addToCart} className='text-[18px] max-sm:mr-2 max-sm:mt-2 sm:mx-2 border border-black px-4 py-4 rounded-xl'>Add To Cart</button>
    )
}

export default AddToCartButton