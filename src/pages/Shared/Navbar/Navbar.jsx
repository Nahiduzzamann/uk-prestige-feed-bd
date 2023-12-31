import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full bg-gradient-to-r from-gray-100 via-red-500 to-gray-200">
      <div>
        <div className="container mx-auto flex items-center justify-between">
          <div className="h-10 lg:h-28">
            <img
              className="h-10 lg:h-28 hidden lg:flex"
              src="https://i.ibb.co/8m2cvHw/Prestige-Feed-Industry-Ltd-removebg-preview.png"
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-4xl font-bold italic text-[#1A2753]">
            Balanced Feed, Trusted Company
          </h1>
        </div>
      </div>
      {/* Navigations section */}
      <nav className="">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 lg:h-10 w-8 lg:w-10 text-[#1A2753]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box bg-[#1A2753] z-50"
                >
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to="/">Home</NavLink>
                  </li>
                  <p className='text-center underline pb-2'>Products</p>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'cattleFeed'}`}>Prestige Cattle Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'broilerFeed'}`}>Prestige Broiler Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'layerFeed'}`}>Prestige Layer Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'sonaliFeed'}`}>Prestige Sonali Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'fishFeed'}`}>Prestige Fish Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'shrimpFeed'}`}>Prestige Shrimp Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to={`/products/${'aquariumFishFeed'}`}>Prestige Aquarium Fish Feed</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to="/aboutus">About</NavLink>
                  </li>
                  <li className="text-white  hover:bg-gray-700 px-3 py-[2px] rounded-md lgxedium">
                    <NavLink onClick={toggleMenu} to="/contact">Contact</NavLink>
                  </li>
                </ul>
              )}
            </div>
            <a className="normal-case text-xl"></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 bg-gradient-to-r from-red-900 via-red-600 to-blue-600 border-l-4 border-blue-500 rounded-r-full">
              <li>
                <NavLink
                  className="text-white hover:text-gray-300 lg:text-2xl ml-4 mr-5"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li tabIndex={0}>
                <div className="relative">
                  <div className="text-white hover:text-gray-300 lg:text-2xl mr-5 cursor-pointer" onMouseEnter={() => document.getElementById("dropdown").classList.remove("hidden")} onMouseLeave={() => document.getElementById("dropdown").classList.add("hidden")}>
                    Products
                  </div>
                  <div id="dropdown" className="hidden absolute text-gray-800 shadow top-10 rounded z-50" onMouseEnter={() => document.getElementById("dropdown").classList.remove("hidden")} onMouseLeave={() => document.getElementById("dropdown").classList.add("hidden")}>
                    <ul className="p-4 bg-[#1A2753] rounded-md">
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'cattleFeed'}`}
                        >
                          Prestige Cattle Feed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'broilerFeed'}`}
                        >
                          Prestige Broiler Feed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'layerFeed'}`}
                        >
                          Prestige Layer Feed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'sonaliFeed'}`}
                        >
                          Prestige Sonali Feed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'fishFeed'}`}
                        >
                          Prestige Fish Feed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'shrimpFeed'}`}
                        >
                          Prestige Shrimp Feed
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${'aquariumFishFeed'}`}
                        >
                          Prestige Aquarium Fish Feed
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>


              </li>
              <li>
                <NavLink className="text-white hover:text-gray-300 lg:text-2xl  mr-5" to="/Services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white hover:text-gray-300 lg:text-2xl  mr-5" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="text-white hover:text-gray-300 lg:text-2xl  mr-5" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end h-16 lg:h-28">
            <Link to="/">
              <img
                className="h-16 lg:h-28 flex lg:hidden"
                src="https://i.ibb.co/8m2cvHw/Prestige-Feed-Industry-Ltd-removebg-preview.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;


