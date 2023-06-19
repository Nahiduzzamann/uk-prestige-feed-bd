import React from 'react'
import Banner from '../Banner/Banner';
import ProductsSection from '../Products/ProductsSection';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import OurValues from '../OurValues/OurValues';

const Home =()=>{
    return(
        <div>
            <Banner></Banner>
            <OurValues></OurValues>
            <ProductsSection></ProductsSection>
            <CompanyOverview></CompanyOverview>
        </div>
    )
}
export default Home;