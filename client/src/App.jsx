import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import NavBarBoot from './components/NavBarBoot.jsx';

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Router, Routes, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
        <ChakraProvider>
      <div className = "App">
         <NavBarBoot/> 
      </div>
    </ChakraProvider>
  </ApolloProvider>
  );
}

export default App


// TODO: may need to be commented back in or deleted
// const theme = extendedTheme({
//   colors: {
//     Pink
//     100: '#ff85f3',
//     White
//     200: '#fff',
//     Yellow
//     300: '#fcff9e',
//   }
// })
// TODO: END


