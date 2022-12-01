import React, {useContext} from 'react';
import {useWorldCupContext} from '../context/WorldCupContext';
import { Game } from '../data/WorldCupDataHelper';
import {Card, CardHeader, Stack, CardBody, Box, VStack, Text, SimpleGrid} from '@chakra-ui/react';

const Games:React.FC = () => {

    const {allGames, setAllGames, removeGameById} = useWorldCupContext();

    
    // moved to context
    // const removeGame = (gameID: string) => {
    //     const filteredGames = allGames.filter((game: Game) => 
    //         game.id!== gameID
    //     )
    //     setAllGames(filteredGames);
    // }

    return(
        <>
        <SimpleGrid columns={{sm: 2, md: 3}} spacing= '20px' >
        {allGames.map((game: Game)=> (
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
        </SimpleGrid>
        </>
    )
}

export default Games;