import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/outline';

const ContactPage = () => {
    return (
        <div className="container mx-auto p-4 pt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h4 className="text-2xl font-bold mb-4 text-[#1A2753]">Contact Us</h4>
                    <div className="flex items-center mb-2 text-blue-900">
                        <PhoneIcon className="h-6 w-6 mr-2 " />
                        <span>+8801713337752</span>
                    </div>
                    <div className="flex items-center mb-2 text-blue-900">
                        <MailIcon className="h-6 w-6 mr-2" />
                        <span>banglanetworkltd@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-2 text-blue-900">
                        <LocationMarkerIcon className="h-6 w-6 mr-2" />
                        <span>Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur</span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold text-[#1A2753]">Location</h2>
                        <div className="mt-2">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4853462408682!2d89.22863257600258!3d25.754527808900363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3334011188799%3A0x41b90776fb5f041!2sSJS%20Kallyan%20Foundation!5e0!3m2!1sen!2sbd!4v1685954381956!5m2!1sen!2sbd"
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl font-bold mb-4 text-[#1A2753]">Send us a message</h4>
                    <form>
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 rounded-md w-full p-2 mb-4"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md w-full p-2 mb-4"
                        />
                        <textarea
                            placeholder="Message"
                            className="border border-gray-300 rounded-md w-full p-2 mb-4 resize-none"
                            rows="4"
                        ></textarea>
                        <button className="bg-blue-900 text-white py-2 px-4 rounded-md">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
