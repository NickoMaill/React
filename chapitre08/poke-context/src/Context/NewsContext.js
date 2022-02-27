import { createContext } from "react";

export const Context = createContext({
    gameNews:[], 
    isLogged: false,
    isLoaded:false,
    pokemon: {},
    weeklyPokemon:[],
    isPokeLoaded:false,
    isWeeklyLoaded:false,
    type: "",
    id: null,
});
