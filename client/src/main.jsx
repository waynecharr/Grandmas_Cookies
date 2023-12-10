import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import App from './App.jsx';

/* 
TODO: may need to be commented back in or deleted
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Text } from "@chakra-ui/react";
import GrandmasPage from './pages/GrandmasPage.jsx';
import AvailableCookies from './pages/AvailableCookies.jsx';
import CheckoutCart from './pages/CheckoutCart.jsx';
TODO: END
*/

// Following extendedTheme function per https://chakra-ui.com/getting-started/vite-guide
const colors = {
  brand: {
    // Pink
    100: '#ff85f3',
    // White
    200: '#fff',
    // Yellow
    300: '#fcff9e',
  }
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

/* 
TODO: may need to be commented back in or deleted
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
*/