import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Text } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx'
import GrandmasPage from './pages/GrandmasPage.jsx';
import AvailableCookies from './pages/AvailableCookies.jsx';
import CheckoutCart from './pages/CheckoutCart.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Text fontSize="250" position="absolute" top="100%" right="50%">It seems you're lost!</Text>,
    children: [
      {
        index: true,
        element: <GrandmasPage />
      },
      {
        path: '/shop',
        element: <AvailableCookies />
      },
      {
        path: '/checkout',
        element: <CheckoutCart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
