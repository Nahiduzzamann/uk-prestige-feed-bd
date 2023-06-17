import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

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
                centerMode={true}
                centerSlidePercentage={80}
            >
                <div className=''>
                    <img className=' lg:h-[750px]' src="https://cdn.shopify.com/s/files/1/0508/4767/8644/articles/Responsible_Dog_Ownership_1200x.jpg?v=1663345594" alt="Slider Image 1" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Dog Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='lg:h-[750px]' src="https://www.ekoplon.pl/extensions/module/products/images/2020/07/08/lp-prestiz-_3.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Boiler Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='lg:h-[750px]' src="https://www.beefmagazine.com/sites/beefmagazine.com/files/4-05-22%20cattle%20on%20feed%20GettyImages-1160802367.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Cattle Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='lg:h-[750px]' src="https://i.ytimg.com/vi/2vtBvVFQDWQ/maxresdefault.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Layer Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='lg:h-[750px]' src="https://i.ytimg.com/vi/U2sgIACyLPQ/maxresdefault.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Sonali Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='lg:h-[750px]' src="https://www.aces.edu/wp-content/uploads/2021/05/shutterstock_1606325479-scaled.jpg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Fish Feed</h2>
                    </div>
                </div>
                <div>
                    <img className='lg:h-[750px]' src="https://i5.walmartimages.com/asr/5ee78c28-d2cc-4575-a373-8c75444f9340.a53365569a9ce9b9e0a438b2c42d2e50.jpeg" alt="Slider Image 2" />
                    <div className="legend text-base">
                        <h2 className='text-3xl'>Dry Cat Feed</h2>
                    </div>
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;

