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

import axios from "axios";
import offlineApi from "./data/offlineApi.json";
import RandomId from "./Modules/RandomId";

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

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")

      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPokemon(res.results);
        setIsPokeLoaded(true);
      })

      .catch((err) => {
        console.error("Error while charging a Pokemon", err);

      })

    const newsUrl = {
      method: 'GET',
      url: 'https://video-game-news.p.rapidapi.com/pokemon',
      headers: {
        'x-rapidapi-host': 'video-game-news.p.rapidapi.com',
        'x-rapidapi-key': 'f8e155da39mshb4bb9c73c1e3bd6p15dcb5jsn925cb7e1ab14'
      }
    };

    axios.request(newsUrl)
      .then(function (res) {
        console.log(res.data);
        setGameNews(res.data)
        setIsLoaded(true)
      })
      .catch(function (err) {
        console.error(err);
      });

    // setGameNews(offlineApi)
    // console.log(gameNews);
    // setIsLoaded(true)

    function IdsWeek() {
      const res = RandomId(721)
      setWeeklyPokemon((prevId) => {
        return [...prevId, res]
      })
      
    }
    
    IdsWeek()
    IdsWeek()
    IdsWeek()
    
    
  }, []);



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
