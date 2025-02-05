import BreadCrumbHero from '@/components/BreadCrumbHero'
import CheckoutForm from '@/components/CheckoutForm'
import WhyUs from '@/components/WhyUs'
import React from 'react'

function page() {
    return (
        <div>
            <BreadCrumbHero title='Checkout' />
            <div className='w-[95%] 2xl:w-[1240px] mx-auto flex max-md_lg:flex-col justify-between py-14'>
                <CheckoutForm />
                
            </div>
            <WhyUs />
        </div>
    )
}

export default page