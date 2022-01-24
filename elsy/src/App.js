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
  render() {
    return (
      <div className="container-fluid">

        <div className= "row">
          
          {/* Water */}
          <Box bgColor="odd-box" icon = "local_drink" color = "blue" value = {15} unit = "L"/>

          {/* Steps */}
          <Box bgColor = "even-box" icon = "directions_walk" color = "black" value = {3000} unit = "Steps"/>

          {/* heart */}
          <Box bgColor="odd-box" icon = "favorite" color = "red" value = {120} unit = "BPM"/>

          {/* temperature */}
          <Box bgColor = "even-box" icon = "wb_sunny" color = "yellow" value = {-10} unit = "°C"/>

        </div>

      </div>
    );
  }
}

export default App;