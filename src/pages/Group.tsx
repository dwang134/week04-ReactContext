import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import { getGamesByGroup, INIT_WORLD_CUP_GAMES, Group, Game} from '../data/WorldCupDataHelper';
import { useWorldCupContext } from '../context/WorldCupContext';

const Groups:React.FC = () => {

  const [selectGroup, setSelectGroup] = useState<Group>("Group A");
  const {removeGameById} = useWorldCupContext();

  // enum Groups{
  //   A= "Group A",
  //   B= "Group B",
  //   C= "Group C",
  //   D= "Group D"
  // }

  const Group = {
    A: "Group A",
    B: "Group B",
    C: "Group C",
    D: "Group D"
  }

  // const [group, setGroup] = useState("");
  const {groupName} = useParams();

  if (!groupName){
    return <div>No group name</div>
  }else{
    const letter:string = groupName.toUpperCase(); //A a
    //how to check if parameter is not /group/"1"
    if (letter in Group){

      //NEED FIX
      // setSelectGroup(Object.keys(Group)[letter])
    }else{

      //e.g; 1, 2, P, N
      return <div>No group of {groupName} is found</div>
    }
    
  }

  return (
    <div>
    <h2>This is group: {groupName}</h2>
    <Link to= '/'>Go back to games page</Link>
    {getGamesByGroup(selectGroup, INIT_WORLD_CUP_GAMES).map((game: Game)=> (
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

export default Groups