import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import FilmInfo from './Views/FilmInfo';
import HomePage from './Views/HomePage';


class App extends React.Component {

  render() {
    
    return (

      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/film-info/:id" component={FilmInfo}/>
        </Switch>

      </BrowserRouter>

    );

  }
  
}

export default App;

