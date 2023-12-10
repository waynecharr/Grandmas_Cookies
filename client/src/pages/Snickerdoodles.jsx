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

function Snickerdoodles(){
    return(
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='../../assets/snickerdoodles.jpeg'
      alt='Snickerdoodles'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Choclate Chip Cookies
      <br></br>(12 count)</Heading>
      <Text>
      Experience the perfect blend of cinnamon and sugar in Grandma&aposa;s famous Snickerdoodle cookies. Soft, chewy, and utterly delightful.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $12.99
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

 export default Snickerdoodles;
