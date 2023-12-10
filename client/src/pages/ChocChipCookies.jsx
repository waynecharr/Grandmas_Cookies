import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';


// TODO: Previous imports
// Insert CSS types here
// import { useQuery, useMutation } from '@apollo/client';
// import { ADD_COOKIE } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { addCookieId } from '../utils/localStorage';
// TODO: END

function ChocChipCookies(){
    return(
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='../../assets/choclateChipCookies.jpeg'
      alt='Choclate Chip Cookies'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Choclate Chip Cookies
      <br></br>(One Dozen)</Heading>
      <Text>
      Indulge in Grandma&apos;s lovingly baked, classic chocolate chip cookies. Each bite oozing with chocolatey goodness.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $10.99
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    </React.StrictMode>,
  )

 export default ChocChipCookies;
