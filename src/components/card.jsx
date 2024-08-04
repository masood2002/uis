import React from 'react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import ProductImg from '../assets/images/8cdbe123010c380e20f264a8fdd57938-removebg-preview-transformed-removebg-preview.png';
function card() {
  return (
    <Card maxW={{base:"100%", md:"60%", lg:"30%"}} rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
    <CardBody
      boxShadow={'sm'}
      display={'flex'}
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      alignItems={'center'}
    >
      <Image
        w={{base:"40vw", md:"8vw"}}
        src={ProductImg}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        h={{base:"40vh",md:"20vh"}}
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
  )
}

export default card
