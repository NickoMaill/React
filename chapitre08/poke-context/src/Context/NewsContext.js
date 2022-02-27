import { createContext } from "react";

export const Context = createContext({
    gameNews:[], 
    isLogged: false,
    pokemon: {},
    type: "",
    id: null
});
