import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 via-red-500 to-gray-200">
      <div>
        <div className="container mx-auto flex items-center justify-between">
          <div className="h-28">
            <img
              className="h-28 hidden lg:flex"
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
              <button
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#1A2753]"
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
              </button>
              {isOpen && (
                <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1A2753] rounded-box w-52 text-white absolute z-50">
                  <li>
                    <Link onClick={toggleMenu} to="/">Home</Link>
                  </li>
                  <li>
                    <a>Products</a>
                    <ul className="p-2">
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${1}`}>Prestige Cattle Feed</Link>
                      </li>
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${2}`}>Prestige Boiler Feed</Link>
                      </li>
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${3}`}>Prestige Layer Feed</Link>
                      </li>
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${4}`}>Prestige Sonali Feed</Link>
                      </li>
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${5}`}>Prestige Fish Feed</Link>
                      </li>
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${6}`}>Prestige Dry Dog Feed</Link>
                      </li>
                      <li>
                        <Link onClick={toggleMenu} to={`/products/${7}`}>Prestige Dry Cat Feed</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link onClick={toggleMenu} to="/Services">Services</Link>
                  </li>
                  <li>
                    <Link onClick={toggleMenu} to="/">About Us</Link>
                  </li>
                  <li>
                    <Link onClick={toggleMenu} to="/">Contact Us</Link>
                  </li>
                </ul>
              )}
            </div>
            <a className="normal-case text-xl"></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 bg-gradient-to-r from-red-900 via-red-600 to-blue-600 border-l-4 border-blue-500 rounded-r-full">
              <li>
                <Link
                  className="text-white hover:text-gray-300 lg:text-2xl ml-4 mr-5"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="text-white hover:text-gray-300 lg:text-2xl mr-5">
                    Products
                  </summary>
                  <ul className="p-2 bg-[#1A2753] absolute z-50">
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${1}`}>
                        Prestige Cattle Feed
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${2}`}>
                        Prestige Boiler Feed
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${3}`}>
                        Prestige Layer Feed
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${4}`}>
                        Prestige Sonali Feed
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${5}`}>
                        Prestige Fish Feed
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${6}`}>
                        Prestige Dry Dog Feed
                      </Link>
                    </li>
                    <li>
                      <Link className="text-white hover:text-gray-300 lg:text-xl" to={`/products/${7}`}>
                        Prestige Dry Cat Feed
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 lg:text-2xl  mr-5" to="/Services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 lg:text-2xl  mr-5" to="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-gray-300 lg:text-2xl  mr-5" to="/">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end h-28">
            <Link to="/">
              <img
                className="h-28 flex lg:hidden"
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
