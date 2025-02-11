"use client"
import { useStore } from '@/store'
import { cartProduct } from '@/types';
import React, { useEffect, useState } from 'react'

type checkoutForm = {
    firstname: string;
    lastname: string;
    companyName: string;
    country: string;
    city: string;
    zipcode: string;
    phone: string;
    email: string;
    address: string;
    addition_info: string;
}

type setData = React.Dispatch<React.SetStateAction<{
    firstname: string;
    lastname: string;
    companyName: string;
    country: string;
    city: string;
    zipcode: string;
    phone: string;
    email: string;
    address: string;
    addition_info: string;
}>>

const CheckOutPaymentCart = ({ formData, setData, setIsEmpty }: { formData: checkoutForm, setData: setData, setIsEmpty: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { cartProducts, updateCartProducts } = useStore()
    const [isLoading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const handleCheckoutFormData = async () => {

        if (cartProducts.length == 0) {
            alert("Please add Products to cart...!")
            return
        }

        let flag = false

        if (formData.address == "" || formData.city == "" || formData.country == "" || formData.email == "" || formData.firstname == "" || formData.lastname == "" || formData.phone == "" || formData.zipcode == "") {
            flag = true
        }

        if (flag == true) {
            setIsEmpty(true)
        } else {
            setLoading(true)
            const productData = cartProducts.map((product: cartProduct) => {
                return {
                    product: product.productData._id,
                    quantity: product.quantity,
                    variation: product.variation,
                    price: product.quantity * product.productData.price
                }
            })
            let customers = await (await fetch("/api/customers")).json()
            customers = customers.filter((customer: { email: string, _id: string }) => {
                return customer.email == formData.email
            })

            if (customers.length > 0) {
                fetch("/api/orders", {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            customer: customers[0]._id,
                            productData,
                            total_price: total,
                            order_note: formData.addition_info,
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((resp) => {
                    return resp.json()
                }).then((res) => {
                    if (res.transactionId != "") {
                        setData({
                            firstname: "",
                            lastname: "",
                            companyName: "",
                            country: "",
                            city: "",
                            zipcode: "",
                            phone: "",
                            email: "",
                            address: "",
                            addition_info: ""
                        })
                        localStorage.removeItem("CartProducts")
                        updateCartProducts([])
                        setLoading(false)
                        alert("Order Successfully Created")
                    }
                }).catch((err) => {
                    console.log(err)
                    alert(err)
                    setLoading(false)
                })
            } else {
                const createCustomer = await fetch("/api/customers", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const response = await createCustomer.json()

                if (response.transactionId) {
                    const createOrder = await fetch("/api/orders", {
                        method: "POST",
                        body: JSON.stringify(
                            {
                                customer: response.documentIds[0],
                                productData,
                                total_price: total,
                                order_note: formData.addition_info,
                            }
                        ),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    const orderResponse = await createOrder.json()
                    if (orderResponse.transactionId != "") {
                        setData({
                            firstname: "",
                            lastname: "",
                            companyName: "",
                            country: "",
                            city: "",
                            zipcode: "",
                            phone: "",
                            email: "",
                            address: "",
                            addition_info: ""
                        })
                        localStorage.removeItem("CartProducts")
                        updateCartProducts([])
                        setLoading(false)
                        alert("Order Successfully Created")
                    }
                }
            }


        }

    }

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden"
        }else{
            document.body.style.overflow = "auto"
        }
        let total = 0
        cartProducts.map((cartProduct: cartProduct) => {
            total += cartProduct.productData.price * cartProduct.quantity
        })
        setTotal(Number(total.toFixed(2)))
    }, [cartProducts, isLoading])

    return (
        <div className='flex-1 py-16 px-8'>
            <div className='flex flex-wrap justify-between items-center'>
                <p className='text-[24px] font-medium'>Product</p>
                <p className='text-[24px] font-medium'>Subtotal</p>
            </div>
            {
                cartProducts.map((cartProduct: cartProduct, index: number) => {
                    return <div key={index} className='flex flex-wrap justify-between items-center my-3'>
                        <div className='flex items-center gap-x-4'>
                            <p className='text-[16px] text-[#9F9F9F]'>{cartProduct.productData.product_name}</p>
                            <span className='text-[12px] font-medium'>x {cartProduct.quantity}</span>
                        </div>
                        <p className='text-[16px] '>${cartProduct.productData.price * cartProduct.quantity}</p>
                    </div>
                })
            }

            {/* <div className='flex flex-wrap justify-between items-center my-3'>
                <p className='text-[16px]'>Subtotal</p>
                <p className='text-[16px] '>Rs. 250,000.00</p>
            </div> */}
            <div className='flex flex-wrap justify-between items-center my-3'>
                <p className='text-[16px]'>Total</p>
                <p className='text-[24px] text-[#B88E2F] font-bold'>${total}</p>
            </div>
            <div className='flex items-center mt-14'>
                <input type="radio" name="payment_method" value="direct" defaultChecked id="" disabled className='accent-black' />
                <h2 className='text-[16px] ml-4'>Direct Bank Transfer</h2>
            </div>
            <div>
                <p className='text-[16px] text-[#9F9F9F] text-justify py-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            </div>
            <div className='flex items-center mt-2'>
                <input type="radio" name="payment_method" value="cash" id="" className='accent-black' defaultChecked />
                <h2 className='text-[16px] ml-4 text-[#9F9F9F]'>Cash on Delivery</h2>
            </div>
            <div>
                <p className='text-justify text-[16px] py-3'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.</p>
            </div>
            <div className='flex justify-center mt-6'>
                <button onClick={handleCheckoutFormData} className='border border-black text-[20px] py-4 w-[320px] rounded-xl'>Place Order</button>
            </div>
            {isLoading && <div className='flex flex-col justify-center items-center fixed top-0 left-0 h-full w-full bg-gray-600 bg-opacity-60'>
                <div className='h-[50px] w-[50px] rounded-full border-4 border-t-transparent border-white animate-spin'></div>
                <p className='p-2 text-white font-bold'>Creating Order...</p>
            </div>}
        </div>
    )
}

export default CheckOutPaymentCart