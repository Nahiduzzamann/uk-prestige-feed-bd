import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Loading from '../component/Loading';


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to demonstrate loading animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            )}
        </div>
    );
};

export default Main;