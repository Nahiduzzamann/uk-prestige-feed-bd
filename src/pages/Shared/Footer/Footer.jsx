import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#111111]'>
            <footer className="bg-[#fff] rounded-t-none rounded-l rounded-tl-[200px] md:rounded-tl-[400px] pt-28">
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div>
                            <Link to='/'>
                                <img className='h-28' src="https://i.ibb.co/8m2cvHw/Prestige-Feed-Industry-Ltd-removebg-preview.png" alt="" />
                            </Link>
                            <div className="flex mt-4">
                                <Link to="/" className="text-[#111111] hover:text-[#f6c60d] mr-2">
                                    <FaTwitter size={30} />
                                </Link>
                                <Link to="/" className="text-[#111111] hover:text-[#f6c60d] mr-2">
                                    <FaFacebook size={30} />
                                </Link>
                                <Link to="/" className="text-[#111111] hover:text-[#f6c60d]">
                                    <FaInstagram size={30} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#111111] font-bold text-3xl mb-2 border-b-[3px] border-[#00aaef] w-16">Products</h3>
                            <ul className="text-gray-400">
                                <li className='text-[#111111] hover:text-[#f6c60d]'><Link to={`/products/${'cattleFeed'}`}>Prestige Cattle Feed</Link> </li>
                                <li className='text-[#111111] hover:text-[#f6c60d]'><Link to={`/products/${'broilerFeed'}`}>Prestige Broiler Feed</Link></li>
                                <li className='text-[#111111] hover:text-[#f6c60d]'><Link to={`/products/${'layerFeed'}`}>Prestige Layer Feed</Link></li>
                                <li className='text-[#111111] hover:text-[#f6c60d]'><Link to={`/products/${'sonaliFeed'}`}>Prestige Sonali Feed</Link></li>
                                <li className='text-[#111111] hover:text-[#f6c60d]'><Link to='/'>. . . . . . . . . .</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#111111] font-bold text-3xl mb-2 border-b-[3px] border-[#00aaef] w-16">Services</h3>
                            <ul className="">
                                <li className='text-[#111111] hover:text-[#f6c60d]'><Link to='/Services'>Learn More</Link> </li>

                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#111111] font-bold text-3xl mb-2 border-b-[3px] border-[#00aaef] w-16">Contact</h3>
                            <p className="text-[#111111]">Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur</p>
                            <p className="text-[#111111]">Email: prestigefeed.bd@gmail.com</p>
                            <p className="text-[#111111]">Phone: 01713337752</p>
                        </div>
                    </div>
                    <hr className="border-[#00aaef] my-4" />
                    <p className="text-center text-black">
                        &copy; {new Date().getFullYear()} UK-Bangla Prestige Feed Industry (Pvt) Ltd. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;