export type Group = "Group A" | "Group B" | "Group C" | "Group D";

export type CountryAndScore = {
  name: string;
  score: number;
};

export type Game = {
  id: string;
  group: Group;
  countryOne: CountryAndScore;
  countryTwo: CountryAndScore;
};

export const INIT_WORLD_CUP_GAMES: Game[] = [
  {
    id: "game_01",
    group: "Group A",
    countryOne: {
      name: "Qatar",
      score: 0,
    },
    countryTwo: {
      name: "Ecuadar",
      score: 2,
    },
  },
  {
    id: "game_02",
    group: "Group B",
    countryOne: {
      name: "USA",
      score: 1,
    },
    countryTwo: {
      name: "Wales",
      score: 1,
    },
  },
  {
    id: "game_03",
    group: "Group C",
    countryOne: {
      name: "Argentina",
      score: 1,
    },
    countryTwo: {
      name: "Saudi Arabia",
      score: 2,
    },
  },
  {
    id: "game_04",
    group: "Group D",
    countryOne: {
      name: "France",
      score: 4,
    },
    countryTwo: {
      name: "Australia",
      score: 1,
    },
  },
];

// Helpers
//accepts string of country name  and array of all gaems, returns any games that matches with country name 
export const getGamesByCountry = (country: string, games: Game[]): Game[] => {
  return games.filter(
    (game: Game) =>
      game.countryOne.name === country || game.countryTwo.name === country
  );
};

//accepts string of group  name and array of all gaems, returns any games that matches with group name 
export const getGamesByGroup = (group: Group, games: Game[]): Game[] => {
  return games.filter((game: Game) => game.group === group);
};
