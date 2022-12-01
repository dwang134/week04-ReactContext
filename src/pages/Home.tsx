import React, { useState } from 'react'
import Games from '../components/Games'
import {Button, Container, Text, VStack} from '@chakra-ui/react';
import Form from '../components/Form';
import { useDisclosure } from '@chakra-ui/react'
import { useWorldCupContext } from '../context/WorldCupContext';


const Home = () => {

  const {isOpen, setIsOpen} = useWorldCupContext();
// const { isOpen, onOpen, onClose} = useDisclosure()


  return (
    <Container centerContent maxW= '6xl'>
      <VStack spacing='24px' direction= 'column' width= '100%'>
        <Text mt= {10} fontSize= '6xl'>World Cup Games</Text>
        <Button onClick={()=> setIsOpen(true)}>Add more games</Button>
        {isOpen && 
        <Form/>
        }
        <Games/>
      </VStack>
    </Container>
  )
}

export default Home