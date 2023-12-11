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

function Gingersnaps(){
    return(
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='../../assets/gingersnaps.jpeg'
      alt='Gingersnaps'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Gingersnaps
      <br></br>(12 count)</Heading>
      <Text>
      Spice up your day with Grandma&apos;s Gingersnap cookies. The perfect blend of ginger and sweetness in a crisp, flavorful treat.
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

 export default Gingersnaps;
