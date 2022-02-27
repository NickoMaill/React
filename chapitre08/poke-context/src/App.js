import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useState, createContext, useEffect } from "react"
import { Context } from "../src/Context/NewsContext";

import Home from './Views/Home';
import Login from './Views/Login';
import Pokedex from "./Views/Pokedex";
import Team from "./Views/Team";
import Battle from "./Views/Battle";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const UserContext = createContext(false);

export default function App() {

  const [isLogged, setIsLogged] = useState(false)
  const [gameNews, setGameNews] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [weeklyPokemon, setWeeklyPokemon] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWeeklyLoaded, setIsWeeklyLoaded] = useState(false);
  const [isPokeLoaded, setIsPokeLoaded] = useState(false)
  const [type, setType] = useState("")
  const [id, setId] = useState(null)

  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,

    isLoaded: isLoaded,
    setIsLoaded: setIsLoaded,

    gameNews: gameNews,
    setGameNews: setGameNews,

    pokemon: pokemon,
    setPokemon: setPokemon,

    weeklyPokemon: weeklyPokemon,
    setWeeklyPokemon: setWeeklyPokemon,

    isWeeklyLoaded: isWeeklyLoaded,
    setIsWeeklyLoaded: setIsWeeklyLoaded,

    type: type,
    setType: setType,

    id: id,
    setId: setId,

    isPokeLoaded: isPokeLoaded,
    setIsPokeLoaded: setIsPokeLoaded
  }

  return (

    <Context.Provider value={value}>

      <BrowserRouter>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/your-team" component={Team} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/login" component={Login} />
        </Switch>

        <Footer />


      </BrowserRouter>

    </Context.Provider>

  );
}
