import React from 'react';
// Insert CSS types here
// import Auth from '../utils/auth';

import ReactDOM from 'react-dom/client';
import { Image, Center } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

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
            <p> About Grandma</p>
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
              <br></br>
              Hugs,
              Grandma 
            </p>
        </Container>
    )
}

export default GrandmasPage;










// function GrandmasPage(){
//     return (
//         <div className="flex items-center
//         justify-center flex-col text-center 
//         pt-20 pb-6 mr-5 ml-5 pr-5 pl-5">
//             <h1 className="text-4x1 md:text-7x1 mb-1
//              md:mb-3 font-bold">Grandma&apos;s Cookies</h1>
//              <br></br>
//              <br></br>
//             <p className="text-base md:text-xl mb-3 font-medium">Grandma</p>
//             <br></br>
//             <br></br>
//             <Center w='200px' h='300px' >
//               <Image 
//                 borderRadius='full'
//                 boxSize='300px'
//                 src='../../assets/GrannyBio.png'
//               />
//             </Center>
//             <br></br>
//             <p className="text-sm max-w-xl mb-6 font-small">
//             Hi sweethearts,
//             <br></br>
//             My grandchildren helped me setup this page so I can share with ya&apos;ll my famous cookies! Just ask the neigborhood!
//             Family recipes passed down by my grandma and her grandma before her. Though, not the biggest selection
//             Grandma&apos;s cookies are guarenteed to be all natural and made part with the Non-GMO project, and most important of all 
//             made with love!
//             <br></br>
//             <br></br>
//             Hugs,
//             Grandma 
//                 </p>
//         </div>
//     )
// }

// export default GrandmasPage;