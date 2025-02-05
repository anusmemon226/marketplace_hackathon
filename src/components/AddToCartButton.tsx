"use client"
import { useStore } from '@/store'
import React from 'react'

type productData = {
    added_at: string
    category: { category_name: string }
    description: string
    main_image: { _type: string, asset: { _ref: string, _type: string } }
    price: number
    product_images: {
        asset: {
            _ref: string,
            _type: string
        },
        _key: string,
        _type: string
    }[]
    product_name: string
    rating: number
    slug: { current: string, _type: string }
    stock: number
    variation_details: []
    _id: string
}

type cartProduct = {
    quantity: number,
    variation: {
        variation_name:string
        variation_option:string
        _key:string
    }[],
    productData : productData
}

const AddToCartButton = ({ productData, variation, quantity }: { productData: productData, variation: { _key: String, variation_name: string, variation_option: string }[], quantity: number }) => {
    const { setCartProducts } = useStore()
    const addToCart = () => {
        const cartProducts = localStorage.getItem("CartProducts")
        if (cartProducts == null) {
            localStorage.setItem("CartProducts", JSON.stringify([{ productData, variation, quantity }]))
            setCartProducts({ productData, variation, quantity })
            alert("Added To Cart...!")
        } else {
            let previousProducts = JSON.parse(cartProducts)
            const isExist = previousProducts.filter((product: cartProduct) => product.productData.slug.current == productData.slug.current)
            if (isExist.length > 0) {
                alert("Product Already In Cart..!")
            } else {
                previousProducts = [...previousProducts, { productData, variation, quantity }]
                localStorage.setItem("CartProducts", JSON.stringify(previousProducts))
                setCartProducts({ productData, variation, quantity })
                alert("Added To Cart...!")
            }
        }
    }

    return (
        <button onClick={addToCart} className='text-[18px] max-sm:mr-2 max-sm:mt-2 sm:mx-2 border border-black px-4 py-4 rounded-xl'>Add To Cart</button>
    )
}

export default AddToCartButton