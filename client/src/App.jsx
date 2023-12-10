import './App.css';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import GrandmasPage from './pages/GrandmasPage';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  </React.StrictMode>,
)

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
*/

function App() {
  return (
    <ChakraProvider>
      {/* <ApolloClient client={client}> */}
      <div className = "App">
        <GrandmasPage/>
      </div>
      {/* </ApolloClient> */}
    </ChakraProvider>
    

  )
}

export default App
