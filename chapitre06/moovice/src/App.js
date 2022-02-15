import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Favorites from './views/Favorites';
import Home from './views/Home'
import Popular from './views/Popular';
import PopularBattle from './views/PopularBattle';
import Weekly from './views/Weekly';
import WeeklyBattle from './views/WeeklyBattle';

class App extends React.Component {
  render() {

    return (

      <div>

        <BrowserRouter>

          <nav>
            <Link to="/">Home|</Link>
            <Link to="/weekly">Weekly|</Link>
            <Link to="/weekly-battle">Weekly - Battle|</Link>
            <Link to="/popular">Popular|</Link>
            <Link to="/popular-battle">Popular - Battle|</Link>
            <Link to="/favorites">Favorites|</Link>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/weekly-battle" component={WeeklyBattle} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/popular-battle" component={PopularBattle} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>

        </BrowserRouter>

      </div>

    );

  }

}

export default App;