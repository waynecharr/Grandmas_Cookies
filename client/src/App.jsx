import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import NavBarBoot from './components/NavBarBoot.jsx';
import { Outlet } from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Routes, Route } from 'react-router-dom';

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
         <Outlet/> 
      </div>
    </ChakraProvider>
  </ApolloProvider>
  );
}

export default App



//TODO: Check Routes
// function App() {
//   return (
//   <ApolloProvider client={client}>
//         <ChakraProvider>
//       {/* <div className = "App"> */}
//       <Routes>
//       <Route path="/" element={<NavBarBoot />}></Route>
//       <Route path="grandma" element={<GrandmasPage />}></Route>
//       <Route path="shop" element={<Shop />}></Route>
//       </Routes>
//       {/* </div> */}
//     </ChakraProvider>
//   </ApolloProvider>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);