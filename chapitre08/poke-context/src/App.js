import { BrowserRouter, Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import { createContext, useState } from "react"
import Home from './Components/Home';
import Login from './Components/Login';

export const UserContext = createContext(false);

export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  const value = {
    isLogged: isLogged,
    setIsLogged: setIsLogged,
  }

  return (
    <UserContext.Provider value={value}>

      <BrowserRouter>

        <nav>
          <Link to="/">Home | </Link>
          <Link to="/login">Login | </Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>


      </BrowserRouter>

    </UserContext.Provider>
  );
}
