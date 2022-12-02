import React,{ReactPropTypes, useState} from 'react'
import { useWorldCupContext } from '../context/WorldCupContext';
import {Game, CountryAndScore} from '../data/WorldCupDataHelper'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

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
    const {allGames, setAllGames, isOpen, setIsOpen} = useWorldCupContext();
    const initialRef = React.useRef(null)
    const [countryOneName, setCountryOneName] = useState<string>("");
    const [countryOneScore, setCountryOneScore] = useState<number>(0);
    const [countryTwoName, setCountryTwoName] = useState<string>("");
    const [countryTwoScore, setCountryTwoScore] = useState<number>(0);

    // console.log(countryOneName);

    const {id, group, countryOne,countryTwo} = fields;

    const resetFields = () => {
        setFields(defaultFields);
    }

    const addGames = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log('ADD GAMES IS CALLED');

        if (group || countryOne || countryTwo){
            <Alert status='error'>
            <AlertIcon />
            Please make sure all the fields are filled
            </Alert>
        }   

        const totalGames = allGames.length+1;
        const newGame = {id: totalGames, group, countryOne, countryTwo}
        // setFields({...fields, [id]: `game_${totalGames}`})
        // const newGame:Game = {id, group, countryOne, countryTwo};

        //how are you going to insert it within the same group?

        //insert it right after the same group for better organization

        //if not then update the global allGames state with setAllGames
        // setAllGames([...allGames, {...newGame}]);
        resetFields();

        //you might want to update local storage so that data persists next time you come back to this site

        
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        
        // let key= "";

        // if (name in Country){
        //     key = Object.name;
        // }else{
        //     key = name;
        // }

        setFields({...fields, [name]:value});

        // console.log(name);
        // if (name)
        const lastFourChar:string = name.slice(11);
        // countryOne, countryTwo, countryThree?
        // console.log(lastFourChar);

        if (lastFourChar === 'name' || 'score'){
            console.log('this is happening');
            setFields({...fields, [name]: {lastFourChar: value}});
        }else if(!lastFourChar){
            setFields({...fields, [name]: value});
        }

        //console.log(lastFourChar);
    }

  return (
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose= {()=> setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Create new game</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit= {(e)=> addGames(e)}>
                <FormControl isRequired>
                  <FormLabel>Enter the group name</FormLabel>
                  <Input ref={initialRef} placeholder='Group A' type= 'text' name='group' onChange={(e)=> handleChange(e)}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Enter the name for the first country</FormLabel>
                  <Input ref={initialRef} placeholder='Canada' type='text' name='countryOne.name' onChange={(e)=> handleChange(e)}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Enter the score for the first score</FormLabel>
                  <Input ref={initialRef} placeholder='1' type= 'text' name= 'countryOne.score' onChange={(e)=> handleChange(e)}/>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Enter the name for the second country</FormLabel>
                  <Input ref={initialRef} placeholder='USA' type= 'text' name= 'countryTwo.name' onChange={(e)=> handleChange(e)} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Enter the score for the second country</FormLabel>
                  <Input ref={initialRef} placeholder='2' type='number' name= 'countryTwo.score' onChange={(e)=> handleChange(e)} />
                </FormControl>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} type= 'submit'>
                      Add
                    </Button>
                    <Button onClick={()=> setIsOpen(false)}>Cancel</Button>
                </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
        </Modal>
  )
}

export default Form