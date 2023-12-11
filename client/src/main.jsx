// import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


/* 
TODO: may need to be commented back in or deleted
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Text } from "@chakra-ui/react";
import GrandmasPage from './pages/GrandmasPage.jsx';
import CheckoutCart from './pages/CheckoutCart.jsx';
TODO: END
*/

// Following extendedTheme function per https://chakra-ui.com/getting-started/vite-guide
// const colors = {
//   brand: {
//     // Pink
//     100: '#ff85f3',
//     // White
//     200: '#fff',
//     // Yellow
//     300: '#fcff9e',
//   }
// }




