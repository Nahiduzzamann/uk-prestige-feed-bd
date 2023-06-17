import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#207398] mt-16">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div>
                        <Link to='/'>
                            <img className='h-20' src="https://i.ibb.co/8m2cvHw/Prestige-Feed-Industry-Ltd-removebg-preview.png" alt="" />
                        </Link>
                        <div className="flex mt-4">
                            <Link to="/" className="text-gray-400 hover:text-white mr-2">
                                <FaTwitter size={30} />
                            </Link>
                            <Link to="/" className="text-gray-400 hover:text-white mr-2">
                                <FaFacebook size={30} />
                            </Link>
                            <Link to="/" className="text-gray-400 hover:text-white">
                                <FaInstagram size={30} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-2">Products</h3>
                        <ul className="text-gray-400">
                            <li className='text-gray-400 hover:text-white'><Link to='/'>Prestige Cattle Feed</Link> </li>
                            <li className='text-gray-400 hover:text-white'><Link to='/'>Prestige Boiler Feed</Link></li>
                            <li className='text-gray-400 hover:text-white'><Link to='/'>Prestige Layer Feed</Link></li>
                            <li className='text-gray-400 hover:text-white'><Link to='/'>Prestige Sonali Feed</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-2">Services</h3>
                        <ul className="text-gray-400">
                            <li className='text-gray-400 hover:text-white'><Link to='/'>Service-1</Link> </li>
                            <li className='text-gray-400 hover:text-white'><Link to='/'>Service-2</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-2">Contact</h3>
                        <p className="text-gray-400">Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur</p>
                        <p className="text-gray-400">Email: banglanetworkltd@gmail.com</p>
                        <p className="text-gray-400">Phone: 01713337752</p>
                    </div>
                </div>
                <hr className="border-gray-700 my-4" />
                <p className="text-center text-gray-400">
                    &copy; {new Date().getFullYear()} UK-Bangla Prestige Feed Industry (Pvt) Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;