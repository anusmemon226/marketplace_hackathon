import BreadCrumbHero from '@/components/BreadCrumbHero'
import WhyUs from '@/components/WhyUs'
import React from 'react'
import CartBody from '@/components/CartBody'
function page() {
    return (
        <div className=''>
            <BreadCrumbHero title='Cart' />
            <CartBody />
            <WhyUs />
        </div>
    )
}

export default page