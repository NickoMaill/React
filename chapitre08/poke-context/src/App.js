import { BrowserRouter, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import { useState, createContext } from "react"
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
  const [type, setType] = useState("")
  const [id, setId] = useState(null)

  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,

    gameNews: gameNews,
    setGameNews: setGameNews,

    pokemon: pokemon,
    setPokemon: setPokemon,

    type: type,
    setType: setType,

    id: id,
    setId: setId,
  }

  return (

    <Context.Provider value={value}>

      <BrowserRouter>

        <Header/>

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
