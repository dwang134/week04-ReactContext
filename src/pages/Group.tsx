import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import { getGamesByGroup, INIT_WORLD_CUP_GAMES, Group, Game} from '../data/WorldCupDataHelper';
import { useWorldCupContext } from '../context/WorldCupContext';
import {Card, CardBody, VStack, Stack, Box, Text, Container} from '@chakra-ui/react'

const Groups:React.FC = () => {

  const [selectGroup, setSelectGroup] = useState<Group>("Group A");
  const {removeGameById} = useWorldCupContext();

  // enum Groups{
  //   A= "Group A",
  //   B= "Group B",
  //   C= "Group C",
  //   D= "Group D"
  // }

  const selection = {
    A: "Group A",
    B: "Group B",
    C: "Group C",
    D: "Group D"
  }

  // const [group, setGroup] = useState("");
  const {groupName} = useParams();

  useEffect(()=> {
      if(groupName){
        const letter:string = groupName.toUpperCase(); //A a
        console.log(letter);
        //how to check if parameter is not /group/"1"
    
        //NEED FIX
        // let value = Object.keys(Group)[letter]
        // setSelectGroup(Object.keys(Group)[letter])
        if (letter in selection ){
          switch(letter){
            case 'A':
              setSelectGroup("Group A");
              break;
            case 'B':
              setSelectGroup("Group B");
              break;
            case 'C':
              setSelectGroup("Group C");
              break;
            case 'D':
              setSelectGroup("Group D");
              break;
          }
    
      }
    }
  
  },[groupName])


  return (
    <Container centerContent mt={20}>
    <h2>This is group: {groupName}</h2>
    <Link to= '/'>Go back to games page</Link>
    {getGamesByGroup(selectGroup, INIT_WORLD_CUP_GAMES).map((game: Game)=> (
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
    </Container>
  )
}

export default Groups