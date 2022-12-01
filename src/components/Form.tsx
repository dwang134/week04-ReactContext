import React,{ReactPropTypes, useState} from 'react'
import { useWorldCupContext } from '../context/WorldCupContext';
import {Game, CountryAndScore} from '../data/WorldCupDataHelper'

const defaultFields:Game= {
    id: "",
    group: "Group A",
    countryOne: {
        name: "",
        score: 0
    },
    countryTwo: {
        name: "",
        score: 0
    }
}


const Form:React.FC = () => {

    const [fields, setFields] = useState(defaultFields);
    const {allGames, setAllGames} = useWorldCupContext();

    const addGames = (event: React.SyntheticEvent) => {
        event.preventDefault();

        //check if any is empty
        
        //if it is then alert user 

        //if not then update the global allGames state with setAllGames

        //you might want to update local storage so that data persists next time you come back to this site
        
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFields({...fields, [name]: value});
    }

  return (
    <form onSubmit= {(e)=> addGames(e)}>
    <label>Please enter group name</label>
    <input placeholder= 'Group A' name= 'group' type= 'text' onChange={(e)=> handleChange(e)}/>    
    <h2>First Country</h2>
    <label>Please enter the name</label>
    <input placeholder= 'Canada' name= 'countryOne.name' type= 'text' onChange={(e)=> handleChange(e)}/>  
    <label>Please enter the score</label>
    <input placeholder= '1' name= 'countryOne.score' type = 'text'/> 
    <h2>Second Country</h2>
    <label>Please enter the name</label>
    <input placeholder= 'Canada' name= 'countryTwo.name' type= 'text' onChange={(e)=> handleChange(e)}/>  
    <label>Please enter the score</label>
    <input placeholder= '2' name= 'countryTwo.score' type = 'text'/> 
    <h2>Second Country</h2>
    <button type= 'submit'>Add game</button>
    </form>
  )
}

export default Form