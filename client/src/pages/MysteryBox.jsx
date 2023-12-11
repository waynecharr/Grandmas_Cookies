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

function MysteryBox(){
    return(
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='../../assets/cookieBox.jpeg'
      alt='Cookie Mystery Box'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Grandma&apos;s Surprise Mystery Box⁉️
      <br></br>(18 count)</Heading>
      <Text>
      Grandma just loves surprises! Having trouble picking out which cookies you want? This Mystery Box comes with 10 hand-selected cookies of Grandma&apos;s choosing.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $15.99
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


 export default MysteryBox;
