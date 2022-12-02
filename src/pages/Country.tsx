import { Card, CardBody, VStack, Stack, Box, Text} from '@chakra-ui/react';
import React from 'react'
import {useParams, Link} from 'react-router-dom';
import { INIT_WORLD_CUP_GAMES, getGamesByCountry, Game } from '../data/WorldCupDataHelper';

const Country:React.FC = () => {

  const {countryName} = useParams();
  //country name is case sensitive

  if (!countryName){
    return <div>No country name</div>;
  }

  return (
    <VStack mt= {20}>
    <h2>Games related to: {countryName}</h2>
    <Link to= '/'>Go back to games page</Link>
    {getGamesByCountry(countryName, INIT_WORLD_CUP_GAMES).map((game:Game)=> (
     <Card maxW= 'md' align= 'center' width= '20rem'>
     <CardBody>
     <VStack>
     <h4>{game.id}</h4>
     <button onClick= {()=> removeGameById(game.id)}></button>
             <Stack spacing= '24px' direction= 'row'>
             <Box>
                 <h2>{game.countryOne.name}</h2>
                 <h2>{game.countryOne.score}</h2>
             </Box>
             <Text size= '3xl'>VS.</Text>
             <Box>
                 <h2>{game.countryTwo.name}</h2>
                 <h2>{game.countryTwo.score}</h2>
             </Box>
             </Stack>
             <div>{game.group}</div>
         </VStack>
     </CardBody>
   </Card>
    ))}
    </VStack>
  )
}

export default Country

function removeGameById(id: string): void {
  throw new Error('Function not implemented.');
}
