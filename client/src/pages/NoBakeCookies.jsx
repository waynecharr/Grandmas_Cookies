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

function NoBakeCookies(){
    return(
<Card maxW='sm'>
  <CardBody>
    <Image
      src='../../assets/noBakeCookies.png'
      alt='No Bake Cookies'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>No Bake Cookies 
      <br></br>(12 count)</Heading>
      <Text>
      Sometimes Grandma&apos;s like easy bake&apos;s too! Her secret recipe is complete with a special ingredient: love ❤️
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $9.99
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

 export default NoBakeCookies;
