import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from './Components/Button';
import Card from './Components/Card';


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

      <div className='d-flex justify-content-center m-3'>

        <div className='w-25 d-flex flex-column align-items-center'>

          <div className='d-flex justify-content-evenly'>

            <Button
              onClick={() => { this.getCountry("france") }}
            >
              France
            </Button>

            <Button
              onClick={() => { this.getCountry("brazil") }}
            >
              Brazil
            </Button>

            <Button
              onClick={() => { this.getCountry("croatia") }}
            >
              Croatia
            </Button>

          </div>

          <div className=' border border-2 rounded'>

            <Card
              name={this.state.name}
              capital={this.state.capital}
              flag={this.state.flag}
              population={this.state.population}
              region={this.state.region} />

          </div>


        </div>

      </div>


    )

  }

}

export default App;