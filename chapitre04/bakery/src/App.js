import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Components/Add";
import List from "./Components/List";
import Pay from "./Components/Pay";

class App extends React.Component {

  constructor() {

    super()

    this.state = {

      activeTab: "add",
      items: []

    }
  }
  
  render() {

    return(
      <div></div>
    )
  
  }

};

export default App;