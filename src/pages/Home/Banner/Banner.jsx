import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    return (
        <div className=''>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={2000}
                // centerMode={true}
                // centerSlidePercentage={95}
            >
                <div className=''>
                    <img className='h-80 lg:h-[750px]' src="https://cdn.shopify.com/s/files/1/0508/4767/8644/articles/Responsible_Dog_Ownership_1200x.jpg?v=1663345594" alt="Slider Image 1" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Dog Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='h-80 lg:h-[750px]' src="https://benisonmedia.com/wp-content/uploads/2022/03/Research-min-scaled.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Boiler Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='h-80 lg:h-[750px]' src="https://www.beefmagazine.com/sites/beefmagazine.com/files/4-05-22%20cattle%20on%20feed%20GettyImages-1160802367.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Cattle Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='h-80 lg:h-[750px]' src="https://post.healthline.com/wp-content/uploads/2022/04/feeding-chickens-1296-728-header.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Layer Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='h-80 lg:h-[750px]' src="https://cdn11.bigcommerce.com/s-ubwzbv1de6/images/stencil/original/uploaded_images/-the-best-chicken-feed-for-.jpg?t=1571628196" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Sonali Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='h-80 lg:h-[750px]' src="https://www.greenbiz.com/sites/default/files/styles/og_image_1200x630/public/2020-12/fishfeed_sstock.jpg?itok=JfpHBE_s" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Fish Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='h-80 lg:h-[750px]' src="https://i5.walmartimages.com/asr/5ee78c28-d2cc-4575-a373-8c75444f9340.a53365569a9ce9b9e0a438b2c42d2e50.jpeg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-5xl'>Dry Cat Feed</h2>
                    </div>
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;

