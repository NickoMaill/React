import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Steps from "./Components/Steps";

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
          <p>Heart : {heartMin}</p>
          <p>Temperature : {tempMin}</p>
          <Steps />
          <p>Steps : {stepsMin}</p>
          
        </div>

      </div>
    );
  }
}

export default App;

