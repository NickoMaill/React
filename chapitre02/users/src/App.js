import React from 'react';
import data from './users.json';
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

    return (

      data.map((users) => {

        let usersName = users.name,
          userEmail = users.email,
          userWebsite = users.website;


        return (

          <div>

            <UsersInfo 
            name = {usersName}
            email = {userEmail}
            website = {userWebsite}/>

          </div>

        )

      })

    )

  }

}

export default App;
