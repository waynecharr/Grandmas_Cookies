import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import App from './App.jsx';
// import GrandmasPage from './pages/GrandmasPage.jsx';
// import NavBarBoot from './components/NavBarBoot.jsx';
import NavBarBoot from './components/NavBarBoot.jsx';

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


//TODO: KEEP
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='display-2'>Wrong page!</h1>,
//   //   children: [
//   //     {
//   //       index: true,
//   //       element: <GrandmasPage />
//   //     }, {
//   //       path: '/GrandmasPage',
//   //       element: <GrandmasPage />
//   //     }
//   //   ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )
//TODO: KEEP



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

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBarBoot />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


