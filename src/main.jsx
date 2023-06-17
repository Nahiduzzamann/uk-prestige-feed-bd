import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './layout/Main';
import Home from './pages/Home/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProductDetail from './pages/Home/Products/ProductDetail';
import Services from './pages/Services/Services';


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
        path: "/products/:productId",
        element: <ProductDetail></ProductDetail>
      },
     
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-white'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
