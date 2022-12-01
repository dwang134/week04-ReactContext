import React, { useState } from 'react'
import Games from '../components/Games'
import {Button} from '@chakra-ui/react';
import Form from '../components/Form';

const Home = () => {

  const [adding, setAdding]= useState(false);

  return (
    <div>
    <h1>World Cup Games</h1>
    <Button onClick= {()=> setAdding(true)}>Add more games</Button>
    {adding && (
      <Form/>
    )}
    <Games/>
    </div>
  )
}

export default Home