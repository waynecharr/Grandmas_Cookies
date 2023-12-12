// import React from 'react';
// Insert CSS types here
// import Auth from '../utils/auth';

import { Image } from '@chakra-ui/react';
// import { Container } from '@chakra-ui/react';
// import {Breadcrumb,BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Text, SimpleGrid,} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

// export the component theme

        // function BreadCrumbItems(){
        //     return (
        //     <Center>
        //         <Container>
        //             <h1>Grandma&apos;s Cookies</h1>
        //             <br></br>
        //             <br></br>
        //         <Center/>
        //         <Breadcrumb>
        //         <BreadcrumbItem>
        //             <BreadcrumbLink href='#'>About Grandma</BreadcrumbLink>
        //         </BreadcrumbItem>

        //         <BreadcrumbItem>
        //             <BreadcrumbLink href='#'>Shop</BreadcrumbLink>
        //         </BreadcrumbItem>

        //         <BreadcrumbItem>
        //             <BreadcrumbLink href='#'>Checkout</BreadcrumbLink>
        //         </BreadcrumbItem>
        //         </Breadcrumb>
        //         </Container>
        //     </Center>
        //     )
        // }

        function Shop(){
            return(
    <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(345px, 1fr))'>
    <Card padding='4' bg='pink.50' color='black' maxW='lg'>
    <CardBody>
            <Image
            src='../../assets/choclateChipCookies.jpeg'
            alt='Choclate Chip Cookies'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Choclate Chip Cookies
            <br></br>(12 count)</Heading>
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

    <Card padding='4' bg='pink.50' color='black' maxW='lg'>
    <CardBody>
        <Image
        src='../../assets/gingersnaps.jpeg'
        alt='Gingersnaps'
        borderRadius='md'
        boxSize='300px'
        objectFit='cover'
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

    <Card padding='4' bg='pink.50' color='black' maxW='lg'>
    <CardBody>
        <Image
        src='../../assets/italianLemonDrop.jpeg'
        alt='Italian Lemon Drop'
        borderRadius='md'
        boxSize='300px'
        objectFit='cover'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>Italian Lemon Drop
        <br></br>(12 count)</Heading>
        <Text>
        Brighten your day with the zesty delight of Grandma&apos;s Italian Lemon Drop cookies. Refreshing lemon flavor in a soft, delightful cookie.
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

    <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/noBakeCookies.png'
            alt='No Bake Cookies'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
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

        <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/PBcookie.jpeg'
            alt='Peanut Butter Cookies'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Peanut Butter Cookies
            <br></br>(12 count)</Heading>
            <Text>
            For peanut butter lovers, Grandma&apos;s Peanut Butter cookies are a dream come true. Packed with rich, nutty flavor in every bite.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                $11.99
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

        <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/shortbreadCookies.jpeg'
            alt='Shortbread Cookies'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Shortbread Cookies
            <br></br>(12 count)</Heading>
            <Text>
            Simple yet sophisticated, Grandma&apos;s Shortbread cookies melt in your mouth with buttery goodness. A classic treat for any occasion.
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                $11.99
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

        <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/snickerdoodles.jpeg'
            alt='Snickerdoodles'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
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

        <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/SugarCookies.jpeg'
            alt='Sugar Cookies'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'> Sugar Cookies
            <br></br>(12 count)</Heading>
            <Text>
            Classic and sweet, Grandma&apos;s Sugar Cookies are a timeless favorite. Simple elegance in every bite, perfect for any occasion.
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

        <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/whiteChocMacadamia.jpeg'
            alt='White Chocolate Macadamia Nut'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
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

        <Card padding='4' bg='pink.50' color='black' maxW='lg'>
        <CardBody>
            <Image
            src='../../assets/cookieBox.jpeg'
            alt='Cookie Mystery Box'
            borderRadius='md'
            boxSize='300px'
            objectFit='cover'
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
</SimpleGrid>  

    )
}

export default Shop;