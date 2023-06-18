import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-yellow-100">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                        <Link to='/'>
                            <img className='h-28' src="https://i.ibb.co/8m2cvHw/Prestige-Feed-Industry-Ltd-removebg-preview.png" alt="" />
                        </Link>
                        <div className="flex mt-4">
                            <Link to="/" className="text-blue-700 hover:text-blue-900 mr-2">
                                <FaTwitter size={30} />
                            </Link>
                            <Link to="/" className="text-blue-700 hover:text-blue-900 mr-2">
                                <FaFacebook size={30} />
                            </Link>
                            <Link to="/" className="text-blue-700 hover:text-blue-900">
                                <FaInstagram size={30} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-blue-900 font-bold text-3xl mb-2 border-b-[3px] border-red-500 w-16">Products</h3>
                        <ul className="text-gray-400">
                            <li className='text-blue-700 hover:text-blue-900'><Link to={`/products/${1}`}>Prestige Cattle Feed</Link> </li>
                            <li className='text-blue-700 hover:text-blue-900'><Link to={`/products/${2}`}>Prestige Boiler Feed</Link></li>
                            <li className='text-blue-700 hover:text-blue-900'><Link to={`/products/${3}`}>Prestige Layer Feed</Link></li>
                            <li className='text-blue-700 hover:text-blue-900'><Link to={`/products/${4}`}>Prestige Sonali Feed</Link></li>
                            <li className='text-blue-700 hover:text-blue-900'><Link to='/'>. . . . . . . . . .</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-900 font-bold text-3xl mb-2 border-b-[3px] border-red-500 w-16">Services</h3>
                        <ul className="">
                            <li className='text-blue-700 hover:text-blue-900'><Link to='/Services'>Learn More</Link> </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-900 font-bold text-3xl mb-2 border-b-[3px] border-red-500 w-16">Contact</h3>
                        <p className="text-blue-700">Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur</p>
                        <p className="text-blue-700">Email: banglanetworkltd@gmail.com</p>
                        <p className="text-blue-700">Phone: 01713337752</p>
                    </div>
                </div>
                <hr className="border-gray-700 my-4" />
                <p className="text-center text-black">
                    &copy; {new Date().getFullYear()} UK-Bangla Prestige Feed Industry (Pvt) Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;