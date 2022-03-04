import { createContext } from "react";

export const Context = createContext({
    gameNews:[], 
    isLogged: false,
    pokemon: {},
    locationArea:[],
    currentPokemon: {},
    weeklyPokemon:[],
    team: [],
    type: "",
    id: null,
    modalIsOpen: false,
});
