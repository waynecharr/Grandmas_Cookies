import './App.css';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import GrandmasPage from './pages/GrandmasPage';
import NoBakeCookies from './pages/AvailableCookies';
import ChocChipCookies from './pages/ChocChipCookies';
import Snickerdoodles from './pages/Snickerdoodles';
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
TODO: END
*/

function App() {
  return (
    <ChakraProvider>
      {/* <ApolloClient client={client}> */}
      <div className = "App">
        <GrandmasPage/>
        <NoBakeCookies/>
        <ChocChipCookies/>
        <Snickerdoodles/>

      </div>
      {/* </ApolloClient> */}
    </ChakraProvider>
    

  )
}

export default App
