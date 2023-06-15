import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-1/2">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.ekoplon.pl/extensions/module/products/images/2020/07/08/lp-prestiz-_3.jpg" className="w-full h-1/2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-1/2">
                    <img src="https://cdn.shopify.com/s/files/1/0508/4767/8644/articles/Responsible_Dog_Ownership_1200x.jpg?v=1663345594" className="w-full h-1/2" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;