import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main';
import Home from './pages/Home/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProductDetail from './pages/Home/Products/ProductDetail';
import Services from './pages/Services/Services';
import ContactPage from './pages/Home/Contact/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import CattleFeed from './pages/CattleFeed/CattleFeed';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/cattleFeed",
        element: <CattleFeed></CattleFeed>
      },
      {
        path: "/products/:productName",
        element: <ProductDetail></ProductDetail>
      },
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gray-100'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
