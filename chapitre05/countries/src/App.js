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
		// Tout code asynchrone vient dans le componentDidMount
		fetch("https://restcountries.com/v3.1/name/france")
			.then((res) => res.json())
			.then((data) => {
				console.log("data", data);
				this.setState({ name: data.name.common });
			});
	}

  render() {

    return (
      <div>
        <ul>
          <li>{this.state.name}</li>
          <li>{this.state.capital}</li>
          <li>{this.state.flag}</li>
          <li>{this.state.population}</li>
          <li>{this.state.region}</li>
        </ul>
      </div>
    )

  }

}

export default App