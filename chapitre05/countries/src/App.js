import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


class App extends React.Component {

  constructor() {
    super()

    this.state = {

      name: "",
      capital: "",
      flag: "",
      population: "",
      region: ""

    }

  }

  componentDidMount() {
		fetch("https://restcountries.com/v3.1/name/france")
			.then(res => res.json())
			.then(data => {

        data.map((country) =>{

          console.log("data", country);
          this.setState({ 
            name: country.name.common, 
            capital: country.capital,
            flag: country.flags.png,
            population: country.population,
            region: country.region

          });
        })

			});
	}

  render() {

    return (

      <div>

        <ul>

          <li><img src={`${this.state.flag}`}/></li>
          <li>Name : {this.state.name}</li>
          <li>Capital : {this.state.capital}</li>
          <li>Population : {this.state.population}</li>
          <li>Region : {this.state.region}</li>
        </ul>

      </div>

    )

  }

}

export default App