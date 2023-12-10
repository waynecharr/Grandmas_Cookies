import './App.css';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import GrandmasPage from './pages/GrandmasPage';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Cookie Imports
import NoBakeCookies from './pages/NoBakeCookies';
import ChocChipCookies from './pages/ChocChipCookies';
import Snickerdoodles from './pages/Snickerdoodles';
import PeanutButter from './pages/PBcookies';
import Gingersnaps from './pages/Gingersnaps';
import Shortbread from './pages/ShortbreadCookies';
import WhiteChocMacadamia from './pages/WhiteChocMacadamia';
import ItalianLemonDrop from './pages/ItalianLemonDrop';
import SugarCookies from './pages/SugarCookies';
import MysteryBox from './pages/MysteryBox';

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
        <PeanutButter/>
        <Gingersnaps/>
        <Shortbread/>
        <WhiteChocMacadamia/>
        <ItalianLemonDrop/>
        <SugarCookies/>
        <MysteryBox/>

      </div>
      {/* </ApolloClient> */}
    </ChakraProvider>
    

  )
}

export default App
