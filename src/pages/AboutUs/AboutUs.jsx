import React from 'react';
import { FaCheckCircle, FaRecycle, FaLightbulb, FaUserFriends } from 'react-icons/fa';
const AboutUs = () => {
  return (
    <div className="bg-[#fff]">
      {/* Hero section */}
      <section className="bg-[#00aaef] text-[#fff] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to Prestige Feed Industry Ltd, a leading animal feed
            industry dedicated to providing high-quality feed products for
            healthier livestock.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://additivesmas.com/wp-content/uploads/2022/11/Mission-and-Vision-icon.png"
                alt="Mission"
                className="w-full h-auto rounded-xl "
              />
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 pl-0 lg:pl-4">
              <h2 className="text-3xl font-bold mb-4 text-[#1A2753]">Our Mission</h2>
              <p className="text-lg text-[#797979]">
                Our mission is to provide superior animal feed products that
                meet the nutritional needs of livestock, enhance their health
                and well-being, and contribute to the success of our customers'
                farming operations.
              </p>
              <h2 className="text-3xl font-bold mt-4 mb-4 text-[#1A2753]">Our Vision</h2>
              <p className="text-lg text-[#797979]">
                Our vision is to become the industry leader in animal feed
                production, setting the highest standards for quality,
                innovation, and sustainability. We aim to foster a healthier
                future for livestock and contribute to the overall well-being of
                the agricultural community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-[#111111] py-16">
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
                  We are committed to delivering high-quality feed products to
                  our customers.
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
      </section>

      {/* Team section */}
      <section className="py-16 bg-[#00aaef]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#fff]">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
                <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">John Doe</h4>
              <p className='text-gray-200'>CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
              <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">Jane Smith</h4>
              <p className='text-gray-200'>COO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
              <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">Michael Johnson</h4>
              <p className='text-gray-200'>CTO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
              <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">Sarah Williams</h4>
              <p className='text-gray-200'>CFO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
