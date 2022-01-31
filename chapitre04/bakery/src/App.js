import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Components/Add";
import List from "./Components/List";
import Pay from "./Components/Pay";
import Button from "./Components/Button";

class App extends React.Component {

  constructor() {

    super()

    this.state = {

      activeTab: "Add",
      items: [],

    }

    this.selectTab = this.selectTab.bind(this);


  }

  selectTab(e) {
    this.setState({ activeTab: e.target.value })
    console.log(this.state.activeTab);
  }

  render() {

    return (

      <div>

        <div className="d-flex" role="group">

          <Button
            children="Add"
            isSelected={this.state.activeTab === "Add" ? true : false}
            click={this.selectTab}
          />

          <Button
            children="List"
            isSelected={this.state.activeTab === 'List' ? true : false}
            click={this.selectTab}
          />

          <Button
            children="Pay"
            isSelected={this.state.activeTab === 'Pay' ? true : false}
            click={this.selectTab}
          />

        </div>

        <div>

          <Add
            isSelected={this.state.activeTab === "Add" ? true : false}
          />

          <List
            isSelected={this.state.activeTab === 'List' ? true : false} />

          <Pay
            isSelected={this.state.activeTab === 'Pay' ? true : false}
          />

        </div>

      </div>

    )

  }

};

export default App;