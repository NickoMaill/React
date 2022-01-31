import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./Components/box";
import Styles from "./Styles/global.css"

const tempMin = -20,
  tempMax = 40,
  heartMin = 80,
  heartMax = 180,
  stepsMin = 0,
  stepsMax = 50000;


class App extends React.Component {

  constructor() {

    super()

    this.state = {

      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,

    };

    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTempChange = this.onTempChange.bind(this)
  }

  onStepsChange(e) {
    this.setState({ steps: e.target.value })
  }

  onHeartChange(e) {
    this.setState({ heart: e.target.value })
  }

  onTempChange(e) {
    this.setState({ temperature: e.target.value })

    if (++this.state.temperature >= 20) {
      this.setState({ water: Math.round(this.state.water * 100) / 100 + 0.02 })

    } else if (--this.state.temperature >= 20) {
      this.setState({ water: Math.round(this.state.water * 100) / 100 - 0.02 })
    }

    console.log(this.state.temperature);
  }

  render() {


    return (

      <div className="container-fluid">

        <div className="row">

          {/* Water */}

          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            unit="L"
            min="1,5"
          />

          {/* Steps */}

          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={`${stepsMin}`}
            max={`${stepsMax}`}
            onInput={this.onStepsChange}

          />

          {/* Heart */}

          <Box
            icon="favorite"
            color=" red"
            value={this.state.heart}
            unit="bpm"
            min={`${heartMin}`}
            max={`${heartMax}`}
            onInput={this.onHeartChange}
          />

          {/* Temperature */}

          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={`${tempMin}`}
            max={`${tempMax}`}
            onInput={this.onTempChange}
          />

        </div>

      </div>

    );

  }

}

export default App;