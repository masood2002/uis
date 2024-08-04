import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
import {
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import ProductImg from '../assets/images/0a48d49733d61d3fa6a2ad469bc69ff3-removebg-preview-transformed.png';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function ProductTabs() {
  return (
    <Flex justify={'center'}>
      <Tabs
        variant={'unstyled'}
        border={'none'}
        align="center"
        textAlign="center"
        w={'90%'}
        mb={10}
      >
        <TabList textAlign={'center'}>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Featured</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Top rated</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Latest</Tab>
          <Tab _selected={{ color: 'white', bg: 'red.500' }}>Special</Tab>
        </TabList>

        <TabPanels>
          <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={{base:"40vw", md:"10vw"}}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                    <Link to="/ProductPage">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  </Link>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                <Link to="/ProductPage">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  </Link>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </TabPanel>
          <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </TabPanel>
          <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </TabPanel>
          <TabPanel alignItems="center" justifyContent="center" mt={10} flexWrap={"wrap"} display={"flex"} gap={10}>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm" rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
              <CardBody
                boxShadow={'sm'}
                display={'flex'}
                flexDir={'column'}
                align={'center'}
                justify={'center'}
                alignItems={'center'}
              >
                <Image
                  w={'10vw'}
                  src={ProductImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">HeadPhones</Heading>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae iste quam nesciunt dolores saepe facere alias
                    temporibus distinctio amet, repellendus sunt.
                  </Text>
                  <Text color="red.500" fontWeight={"600"} fontSize="3xl">
                    $20
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"red.500"}/>
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="red">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="red">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default ProductTabs;
