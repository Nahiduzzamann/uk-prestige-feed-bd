import React from 'react';
import { FaCheckCircle, FaLightbulb, FaRecycle, FaUserFriends } from 'react-icons/fa';
const OurValues = () => {
    return (
        <div className='bg-[#111111] py-16'>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-[#fff]">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center">
                        <div className="bg-[#fff] rounded-full p-4 mr-4">
                            <FaCheckCircle className="w-6 h-6 text-[#00aaef]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[#fff]">Quality</h3>
                            <p className='text-[#f6c60d]'>
                            At Prestige Feed Industry Ltd, our top priority is ensuring the delivery of high-quality feed to our valued customers. 
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#fff] rounded-full p-4 mr-4">
                            <FaRecycle className="w-6 h-6 text-[#00aaef]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[#fff]">Sustainability</h3>
                            <p className='text-[#f6c60d]'>
                                We prioritize sustainable practices in our production and
                                sourcing to minimize the environmental impact.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#fff] rounded-full p-4 mr-4">
                            <FaLightbulb className="w-6 h-6 text-[#00aaef]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[#fff]">Innovation</h3>
                            <p className='text-[#f6c60d]'>
                                We embrace continuous innovation to develop new feed
                                solutions that improve animal health and performance.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="bg-[#fff] rounded-full p-4 mr-4">
                            <FaUserFriends className="w-6 h-6 text-[#00aaef]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-[#fff]">Customer Focus</h3>
                            <p className='text-[#f6c60d]'>
                                We prioritize understanding and meeting our customers' needs
                                to build long-term partnerships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurValues;