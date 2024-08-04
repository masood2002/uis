import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import NavBar from '../components/navBar';
import { Link } from 'react-router-dom';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';
import PrdouctCard from '../components/card';
function shop() {
  return (
    <>
      <NavBar />
      <Box>
        <Grid position={"relative"} gridTemplateColumns={'repeat(9, 1fr)'}>
          <GridItem
            // bg={'red'}
            placeItems={'center'}
            placeContent={'center'}
            colSpan={{ base: '9', md: '4', lg: '2' }}
            // py={8}
            mt={-20}
            ml={10}
            mr={{base:"2rem",md:"2rem",lg:"0"}}
            // position={'absolute'} 
            zIndex={10}
            h={{ base: 'auto', md: 'auto', lg: '100vh' }}
            left={"0"}
          >
            <Flex py={8}>
              <HStack alignItems={'center'} spacing={2}>
                <Link to="/">
                  <Text fontWeight={'600'}>Home</Text>
                </Link>
                <i class="fa-solid fa-chevron-right mt-1 text-[12px]"></i>
                <Link to="/">
                  <Text fontWeight={'400'}>Shop</Text>
                </Link>
              </HStack>
            </Flex>
            <Flex
              gap={15}
              flexDirection={'column'}
              py={6}
              pl={10}
              pr={5}
              w={'100%'}
              border={'1px solid #e8e8e8'}
              rounded={10}
            >
              <Flex justify={'space-between'} alignItems={'center'}>
                <Text fontWeight={'600'} fontSize={'3xl'}>
                  Filters
                </Text>
                <Box display={{ base: 'none', md: 'none', lg: 'block' }}>
                  <i className="fa-regular fa-sliders text-xl mt-1 cursor-pointer"></i>
                </Box>
                <Box display={{ base: 'block', md: 'block', lg: 'none' }}>
                  <Drawer />
                </Box>
              </Flex>
              <Flex
                display={{ base: 'none', md: 'none', lg: 'block' }}
                flexDir={'column'}
                gap={8}
              >
                <Text my={3} fontWeight={'600'} fontSize={'18px'}>
                  Categories
                </Text>
                <Stack my={2}>
                  <Checkbox colorScheme="red">
                    <Text fontWeight={'400'}>All</Text>
                  </Checkbox>
                  <Checkbox colorScheme="red">
                    <Text fontWeight={'400'}>Men</Text>
                  </Checkbox>
                  <Checkbox colorScheme="red">
                    <Text fontWeight={'400'}>Women</Text>
                  </Checkbox>
                  <Checkbox colorScheme="red">
                    <Text fontWeight={'400'}>Kids</Text>
                  </Checkbox>
                </Stack>
                <Text fontWeight={'600'} fontSize={'3xl'}>
                  Price
                </Text>
                <RangeSlider
                  aria-label={['min', 'max']}
                  colorScheme="red"
                  defaultValue={[20, 70]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Flex justifyContent={'space-between'}>
                  <Text fontSize={'20px'} fontWeight={'500'}>
                    $20
                  </Text>
                  <Text fontSize={'20px'} fontWeight={'500'}>
                    $70 r{' '}
                  </Text>
                </Flex>
                <Button mt={6} colorScheme="red">
                  Apply Filters
                </Button>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem p={12} colSpan={{ base: '9', md: '5', lg: '7' }}>
            <Box>
              <Text mb={4} fontWeight={"700"} fontSize="3xl">Top Trending</Text>
            </Box>
            <Flex gap={10} flexWrap={"wrap"}>
            <PrdouctCard></PrdouctCard>
            <PrdouctCard></PrdouctCard>
            <PrdouctCard></PrdouctCard>
            <PrdouctCard></PrdouctCard>
            <PrdouctCard></PrdouctCard>
            <PrdouctCard></PrdouctCard>
            </Flex>
          </GridItem>
        </Grid>
        <Footer/>
      </Box>
    </>
  );
}

export default shop;
