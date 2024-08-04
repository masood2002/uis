import { Flex, Img, Text, Button } from '@chakra-ui/react';
import React from 'react';
import Img1 from '../assets/images/8cdbe123010c380e20f264a8fdd57938-removebg-preview-transformed-removebg-preview.png';
import ShopBtn from './ShopBtn/ShopBtnBg';
function thirdSection() {
  return (
    <Flex
      flexDirection={'column'}
      my={14}
      mx={{ base: '30px', md: '60px' }}
      justify={'center'}
      // flexWrap={'wrap'}
    >
      <Text as={'h2'} fontSize={'30px'} fontWeight={'700'}>
        Top Rated Products
      </Text>
      <Flex alignItems={"center"} justify={'center'} gap={10} my={10} flexWrap={{base:"wrap", md:"nowrap"}} >
        <Flex
          justify={'center'}
          w={{ base: '100%', md: '30%' }}
          rounded={20}
          gap={10}
          p={4}
          boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}
        >
          <Img w={{ base: '20vw', md: '8vw' }} h={{base:"8rem", md:"12rem"}} src={Img1} />
          <Flex justify={'center'} flexDir={'column'}>
            <Text fontWeight={'600'} fontSize={'22px'}>
              Heaphones
            </Text>
            <Text color={'gray.700'} fontWeight={'500'} fontSize={'14px'}>
              Lorem ipsum <br />
              dolor sit amet...
            </Text>
            <Text fontSize={'25px'} fontWeight={'600'} color={'red'}>
              $20
            </Text>
          <ShopBtn/>
          </Flex>
        </Flex>
        <Flex
          justify={'center'}
          w={{ base: '100%', md: '28%' }}
          rounded={20}
          gap={10}
          p={4}
          boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}
        >
          <Img w={{ base: '20vw', md: '8vw' }} h={{base:"8rem", md:"12rem"}}  src={Img1} />
          <Flex justify={'center'} flexDir={'column'}>
            <Text fontWeight={'600'} fontSize={'22px'}>
              Heaphones
            </Text>
            <Text color={'gray.700'} fontWeight={'500'} fontSize={'14px'}>
              Lorem ipsum <br />
              dolor sit amet...
            </Text>
            <Text fontSize={'25px'} fontWeight={'600'} color={'red'}>
              $20
            </Text>
            <ShopBtn/>
          </Flex>
        </Flex>
        <Flex
          justify={'center'}
          w={{ base: '100%', md: '28%' }}
          rounded={20}
          gap={10}
          p={4}
          boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}
        >
          <Img w={{ base: '20vw', md: '8vw' }} h={{base:"8rem", md:"12rem"}}  src={Img1} />
          <Flex justify={'center'} flexDir={'column'}>
            <Text fontWeight={'600'} fontSize={'22px'}>
              Heaphones
            </Text>
            <Text color={'gray.700'} fontWeight={'500'} fontSize={'14px'}>
              Lorem ipsum <br />
              dolor sit amet...
            </Text>
            <Text fontSize={'25px'} fontWeight={'600'} color={'red'}>
              $20
            </Text>
            <ShopBtn/>
          </Flex>
        </Flex>
        <Flex
          justify={'center'}
          w={{ base: '100%', md: '28%' }}
          rounded={20}
          gap={10}
          p={4}
          boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}
        >
          <Img w={{ base: '20vw', md: '8vw' }} h={{base:"8rem", md:"12rem"}} src={Img1} />
          <Flex justify={'center'} flexDir={'column'}>
            <Text fontWeight={'600'} fontSize={'22px'}>
              Heaphones
            </Text>
            <Text color={'gray.700'} fontWeight={'500'} fontSize={'14px'}>
              Lorem ipsum <br />
              dolor sit amet...
            </Text>
            <Text fontSize={'25px'} fontWeight={'600'} color={'red'}>
              $20
            </Text>
            <ShopBtn/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default thirdSection;
