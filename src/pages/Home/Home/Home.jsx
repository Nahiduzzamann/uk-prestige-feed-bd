import React from 'react'
import Banner from '../Banner/Banner';
import ProductsSection from '../Products/ProductsSection';
import CompanyOverview from '../CompanyOverview/CompanyOverview';

const Home =()=>{
    return(
        <div>
            <Banner></Banner>
            <ProductsSection></ProductsSection>
            <CompanyOverview></CompanyOverview>
        </div>
    )
}
export default Home;