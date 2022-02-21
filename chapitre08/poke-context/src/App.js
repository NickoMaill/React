import React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom/cjs/react-router-dom.min";
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  return (
    <BrowserRouter>
    
      <nav>
        <Link to="/">Home | </Link>
        <Link to="/login">Login | </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;
