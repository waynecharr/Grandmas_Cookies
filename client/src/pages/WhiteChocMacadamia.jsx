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

function WhiteChocMacadamia(){
    return(
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='../../assets/whiteChocMacadamia.jpeg'
      alt='White Chocolate Macadamia Nut'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>White Chocolate Macadamia Nut
      <br></br>(12 count)</Heading>
      <Text>
      Indulge in luxury with Grandma&apos;s White Chocolate Macadamia Nut cookies. Creamy white chocolate meets crunchy macadamia nuts for a divine experience.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $13.99
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

 export default WhiteChocMacadamia;
