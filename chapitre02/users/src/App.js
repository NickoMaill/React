import React from 'react';
import Data from './users.json';
import './App.css';
import UsersInfo from './Components/UsersInfo'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [],
    };
  }

  render() {

    return(
      Data.map((users) => {
        let usersName = users.name,
         userEmail = users.email,
         userWebsite = users.website;


        return(

        <div>
          <p>{usersName}</p>
          <p>{userEmail}</p>
          <p>{userWebsite}</p>
        </div>

        )

      })

    )
    
  }

}

export default App;
