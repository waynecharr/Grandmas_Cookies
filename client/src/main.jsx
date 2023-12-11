import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ChakraProvider } from '@chakra-ui/react';
// import { extendTheme } from '@chakra-ui/react';
// import { Text } from '@chakra-ui/react';
import GrandmasPage from './pages/GrandmasPage.jsx';

import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBarBoot from './components/NavBarBoot.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

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

// import SearchBooks from './pages/SearchBooks'
// import SavedBooks from './pages/SavedBooks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBarBoot />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <GrandmasPage />
      }, {
        path: '/GrandmasPage',
        element: <GrandmasPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

// const theme = extendTheme({ colors })

// const rootElement = document.getElementById('root')
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       {/* <App /> */}
//       <LoginFormBoot />

//     </ChakraProvider>
//   </React.StrictMode>,
// )

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Text fontSize="250" position="absolute" top="100%" right="50%">It seems you're lost!</Text>,
//     children: [
//       {
//         path: 'login',
//         element: <Test />
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )


