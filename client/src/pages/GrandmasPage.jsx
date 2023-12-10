import React from 'react';
// Insert CSS types here
// import Auth from '../utils/auth';

import ReactDOM from 'react-dom/client';
import { Image, Center } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import {Breadcrumb,BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    </React.StrictMode>,
  )

  function GrandmasPage(){
    return (
        <Container>
            <h1>Grandma&apos;s Cookies</h1>
              <br></br>
              <br></br>
              <Breadcrumb fontWeight='medium' fontSize='sm'>
                <BreadcrumbItem>
                  <BreadcrumbLink href='#'>About Grandma</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <br></br>
              <br></br>
            <Center>
              <Image 
                borderRadius='full'
                boxSize='300px'
                src='../../assets/GrannyBio.png'
                display={"flex"}
                h='300px'
                w='225px'
              />
            </Center>
            <br></br>
            <p>
              Hi sweethearts,
              <br></br>
              My grandchildren helped me setup this page so I can share with ya&apos;ll my famous cookies! Just ask the neigborhood!
              Family recipes passed down by my grandma and her grandma before her. Though, not the biggest selection
              Grandma&apos;s cookies are guarenteed to be all natural and made part with the Non-GMO project, and most important of all,
              made with love!
              <br></br>
              Hugs,
              Grandma 
            </p>
        </Container>
    )
}

export default GrandmasPage;