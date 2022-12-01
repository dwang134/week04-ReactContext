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
    Text,
    Alert,
    AlertIcon
  } from '@chakra-ui/react'

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

    const {id, group, countryOne,countryTwo} = fields;

    const resetFields = () => {
        setFields(defaultFields);
    }

    const addGames = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (group || countryOne || countryTwo){
            <Alert status='error'>
            <AlertIcon />
            Please make sure all the fields are filled
            </Alert>
        }

        const totalGames = allGames.length;
        setFields({...fields, [id]: `game_${totalGames}`})
        const newGame:Game = {id, group, countryOne, countryTwo};

        //how are you going to insert it within the same group?

        //insert it right after the same group for better organization

        //if not then update the global allGames state with setAllGames
        setAllGames([...allGames, {...newGame}]);
        resetFields();

        //you might want to update local storage so that data persists next time you come back to this site

        
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setFields({...fields, [name]: value});
    }

  return (
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose= {()=> setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Create new game</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl onSubmit= {(e)=> addGames(e)}>
              <FormLabel>Enter the group name</FormLabel>
              <Input ref={initialRef} required placeholder='Group A' type= 'text' name='group' onChange={handleChange} value={fields.group}/>
            </FormControl>
            <FormControl>
              <FormLabel>Enter the name for the first country</FormLabel>
              <Input ref={initialRef} required placeholder='Canada' type='text' name='countryOne' onChange={handleChange} value={fields.countryOne.name} />
            </FormControl>
            <FormControl>
              <FormLabel>Enter the score for the first score</FormLabel>
              <Input ref={initialRef} required placeholder='1' type= 'text' name= 'countryOne' onChange={handleChange} value= {fields.countryOne.score}/>
            </FormControl>
            <FormControl>
              <FormLabel>Enter the name for the second country</FormLabel>
              <Input ref={initialRef} required placeholder='USA' type= 'text' name= 'countryTwo' onChange={handleChange} value= {fields.countryTwo.name}/>
            </FormControl>
            <FormControl>
              <FormLabel>Enter the score for the second country</FormLabel>
              <Input ref={initialRef} required placeholder='2' type='number' name= 'countryTwo' onChange={handleChange} value= {fields.countryTwo.score} />
            </FormControl>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} type= 'submit'>
                  Add
                </Button>
                <Button onClick={()=> setIsOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
        </Modal>
  )
}

export default Form