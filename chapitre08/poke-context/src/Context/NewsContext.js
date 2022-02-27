import { createContext } from "react";

export const Context = createContext({
    gameNews:[], 
    isLogged: false,
    isLoaded:false,
    pokemon: {},
    currentPokemon: {},
    weeklyPokemon:[],
    isPokeLoaded:false,
    isWeeklyLoaded:false,
    type: "",
    id: null,
});
