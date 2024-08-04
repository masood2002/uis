import { Img, Flex, Text, Button } from '@chakra-ui/react';
import Img1 from '../assets/images/Screenshot 2024-08-03 160225.png';
import ShopBtn from './ShopBtn/ShopBtn';
function secSection() {
  return (
    <Flex
      position={'relative'}
      gap={10}
      flexDir={{ base: 'column', md: 'row' }}
      flexWrap={"wrap"}
      m={10}
      mx={5}
      px={5}
      justify={'center'}
    >
      {/* <Flex gap={10}> */}
        <Flex
          rounded={10}
          flexDir={'column'}
          gap={14}
          fontWeight={'600'}
          fontSize={'18px'}
          flexWrap={'wrap'}
          py={5}
          px={10}
          bg={'#080609'}
        >
          <Text color={'gray.200'} zIndex={10}>
            Smart Home <br />
            Devices
          </Text>
          <ShopBtn/>
          <Img position={'absolute'}  w={{base:"30vw", md:"10vw"}} src={Img1} />
        </Flex>
        <Flex
          rounded={10}
          flexDir={'column'}
          gap={14}
          fontWeight={'600'}
          fontSize={'18px'}
          py={5}
          px={10}
          bg={'#080609'}
        >
          <Text color={'gray.200'} zIndex={10}>
            Health and <br />
            Wellness
          </Text>
          <ShopBtn/>
          <Img position={'absolute'} w={{base:"30vw", md:"10vw"}} src={Img1} />
        </Flex>
        <Flex
          rounded={10}
          flexDir={'column'}
          gap={14}
          fontWeight={'600'}
          fontSize={'18px'}
          py={5}
          px={10}
          bg={'#080609'}
        >
          <Text color={'gray.200'} zIndex={10}>
            Office <br /> Productivity
          </Text>
          <ShopBtn/>
          <Img position={'absolute'} w={{base:"30vw", md:"10vw"}} src={Img1} />
        </Flex>
        <Flex
          rounded={10}
          flexDir={'column'}
          gap={14}
          fontWeight={'600'}
          fontSize={'18px'}
          py={5}
          px={10}
          bg={'#080609'}
        >
          <Text color={'gray.200'} zIndex={10}>
            Education and <br /> Learning
          </Text>
          <ShopBtn/>
          <Img  position={'absolute'} w={{base:"30vw", md:"10vw"}} src={Img1} />
        </Flex>
        <Flex
          rounded={10}
          flexDir={'column'}
          gap={14}
          fontWeight={'600'}
          fontSize={'18px'}
          py={5}
          px={10}
          bg={'#080609'}
        >
          <Text color={'gray.200'} zIndex={10}>
            Eco-Friendly <br /> Products
          </Text>
          <ShopBtn/>
          <Img position={'absolute'} w={{base:"30vw", md:"10vw"}} src={Img1} />
        </Flex>
      </Flex>
    //  </Flex>
  );
}

export default secSection;
