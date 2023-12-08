import './App.css';
import { extendedTheme, ChakraProvider } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';

const theme = extendedTheme({
  colors: {
    // Pink
    100: '#ff85f3',
    // White
    200: '#fff',
    // Yellow
    300: '#fcff9e',
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApolloClient client={client}>
        
      </ApolloClient>
    </ChakraProvider>

  )
}

export default App
