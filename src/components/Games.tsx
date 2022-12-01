import React, {useContext} from 'react';
import {useWorldCupContext} from '../context/WorldCupContext';
import { Game } from '../data/WorldCupDataHelper';

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
        {allGames.map((game: Game)=> (
            <div className="game-container">
                <div className="game-header">
                <h4>{game.id}</h4>
                <button onClick= {()=> removeGameById(game.id)}></button>
                </div>
                <div className="country-container">
                <h2>{game.countryOne.name}</h2>    
                <h2>{game.countryOne.score}</h2>
                </div>
                <div className="country-container">
                <h2>{game.countryTwo.name}</h2>
                <h2>{game.countryTwo.score}</h2>
                </div>
                <div>{game.group}</div>
            </div>
        ))}
        </>
    )
}

export default Games;