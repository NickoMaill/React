import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from './Components/Button';


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

    this.getCountry = this.getCountry.bind(this)

  }

  componentDidMount() {

    fetch("https://restcountries.com/v3.1/name/france")
      .then(res => res.json())
      .then(data => {

        data.map((country) => {

          // console.log("data", country);

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

  // componentDidUpdate(){
  //   this.getCountry();
  // }
  
  getCountry(country) {
    
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      
      data.map((countrySearch) => {
        
        this.setState({
          name: countrySearch.name.common,
          capital: countrySearch.capital,
          flag: countrySearch.flags.png,
          population: countrySearch.population,
          region: countrySearch.region
          
        });
        
      });

    })

  }
  
  render() {

    return (

      <div>

        <div>

          <Button
            onClick={() => {this.getCountry("france")}}
          >
            France
          </Button>

          <Button
            onClick={() => {this.getCountry("brazil")}}
          >Brazil</Button>

          <Button
            onClick={() => {this.getCountry("croatia")}}
          >Croati</Button>

        </div>

        <div>

          <img src={`${this.state.flag}`} />

          <ul>

            <li>Name : {this.state.name}</li>
            <li>Capital : {this.state.capital}</li>
            <li>Population : {this.state.population}</li>
            <li>Region : {this.state.region}</li>

          </ul>

        </div>


      </div>

    )

  }

}

export default App;