import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      scroll.scrollToTop();
      setShowScroll(false);
    };
  
    return (
      <div
        className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
          showScroll ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FaArrowUp
          className="text-white text-2xl bg-gray-800 rounded-full p-2 cursor-pointer hover:bg-gray-600"
          onClick={scrollToTop}
        />
      </div>
    );
  };
  export default ScrollToTop;