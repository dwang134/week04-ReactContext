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
    <div>
    <h2>Games related to: {countryName}</h2>
    <Link to= '/'>Go back to games page</Link>
    {getGamesByCountry(countryName, INIT_WORLD_CUP_GAMES).map((game:Game)=> (
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
    </div>
  )
}

export default Country

function removeGameById(id: string): void {
  throw new Error('Function not implemented.');
}
