import './App.css';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { ApolloClient, ApolloProvider } from '@apollo/client';
// import GrandmasPage from './pages/GrandmasPage';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Router, Routes, Route } from 'react-router-dom';


// import Shop from './pages/Shop';

/*
TODO: may need to be commented back in or deleted
const theme = extendedTheme({
  colors: {
    Pink
    100: '#ff85f3',
    White
    200: '#fff',
    Yellow
    300: '#fcff9e',
  }
})
TODO: END
*/

function App() {
  return (
    <ChakraProvider>
      <div className = "App">
        {/* <GrandmasPage/> */}
        <br></br>
        <br></br>
        {/* <Shop/> */}
      </div>
    </ChakraProvider>
  )
}

export default App
