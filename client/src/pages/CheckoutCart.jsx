import React from 'react';
import Auth from '../utils/auth';
import ReactDOM from 'react-dom/client';
import { Image, Center } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

// Assuming that you have a function to get the cookie information
// const getCookieInfo = () => {
//   // Replace this with your logic to retrieve cookie information
//   const cookieName = 'Chocolate Chip';
//   const amountOfCookies = 10;

//   return { cookieName, amountOfCookies };
// };

Auth.loggedIn;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Add your additional components here if needed */}
  </React.StrictMode>,
);

function CheckOutCart() {
//   const { cookieName, amountOfCookies } = getCookieInfo();

  return (
    <Center>
      <Container>
        <h1>Checkout Cart</h1>
        <br />
        <br />
        <Center>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>About Grandma</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='/checkout'>Checkout</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Center>
        <br />
        <br />
        <p>
          Your Cart:
          <br />
          Cookie - Amount:
        </p>
      </Container>
    </Center>
  );
}

export default CheckOutCart;