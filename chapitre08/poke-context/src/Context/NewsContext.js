import { createContext } from "react";

export const Context = createContext({
    gameNews:[], 
    isLogged: false,
    isLoaded:false,
    pokemon: {},
    locationArea:[],
    currentPokemon: {},
    weeklyPokemon:[],
    addToTeam: [],
    isPokeLoaded:false,
    isWeeklyLoaded:false,
    newsIsLoaded:false,
    type: "",
    id: null,
    modalIsOpen: false,
});
