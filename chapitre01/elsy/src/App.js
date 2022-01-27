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

      water: '0',
      heart: '120',
      temperature: '-10',
      steps: '3000',
      
    };

    this.hideCursor.bind(this);

  }

  render() {
    
    return (

      <div className="container-fluid">

        <div className="row">

          <Box
            icon="local_drink"
            color="#3A85FF"
            value={1.5}
            unit="L" 
            />

          <Box
            icon="directions_walk"
            color="black"
            value={3000}
            unit="steps" 
            />

          <Box 
          icon="favorite" 
          color="red" 
          value={120} 
          unit="bpm" 
          />

          <Box 
          icon="wb_sunny" 
          color="yellow" 
          value={-10} 
          unit="°C" 
          />

        </div>

      </div>
    );
  }
}

export default App;