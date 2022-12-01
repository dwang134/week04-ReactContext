import { m } from "framer-motion";
import React, { createContext, useContext, useState } from "react";
import { Game, INIT_WORLD_CUP_GAMES} from "../data/WorldCupDataHelper";

type WorldCupContextObject = {
  allGames: Game[];
  setAllGames: (games: Game[]) => void;
  removeGameById: (id: string)=> void;
  isOpen: boolean;
  setIsOpen: (opened: boolean) => void;
};

//contains all the values with them initalized
const WorldCupContext = createContext<WorldCupContextObject>({
  allGames: [],
  setAllGames: () => {},
  removeGameById: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

//reduces ambugity
export const useWorldCupContext = () => {
  return useContext(WorldCupContext);
};

type Props = {
  children: React.ReactNode;
};

//accepts a component as a children and grant functionality to react context
const WorldCupContextProvider: React.FC<Props> = ({ children }) => {
  const [allGames, setAllGames] = useState<Game[]>(INIT_WORLD_CUP_GAMES);
  const [isOpen, setIsOpen] = useState(false);
  // const [onClose, setOnClose] = useState(true);

  const removeGameById = (gameID: string) => {
    const filteredGames = allGames.filter((game: Game) => 
        game.id!== gameID
    )
    setAllGames(filteredGames);
  }

  const worldCupContexObject: WorldCupContextObject = {
    allGames,
    setAllGames,
    removeGameById,
    isOpen,
    setIsOpen,
  };

  return (
    <WorldCupContext.Provider value={worldCupContexObject}>
      {children}
    </WorldCupContext.Provider>
  );
};

export default WorldCupContextProvider;
