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
      total: 0

    }

    this.selectTab = this.selectTab.bind(this);
    this.add = this.add.bind(this)
    this.totalCalc = this.totalCalc.bind(this)

  }

  add(name, price) {
    const obj = {
      name: name,
      price: price,

    }

    const newList = this.state.items
    newList.push(obj)

    newList.sort(function (a, b) {

      return a.price - b.price
    }).reverse()

    this.setState({ items: newList })

    // this.setState({total: obj.price++})

  }

  selectTab(e) {

    this.setState({ activeTab: e.target.value })
    console.log(this.state.activeTab);

  }

  renderContent = () => {

    switch (this.state.activeTab) {

      case "Add":
        return <Add addItem={this.add}></Add>

      case "List":
        return <List listItems={this.state.items}></List>

      case "Pay":
        return <Pay total={this.totalCalc} ></Pay>

      default:
        console.log("oups...");

    }
  }

  render() {

    console.log(this.state.items);

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
            isSelected={this.state.activeTab === "List" ? true : false}
            click={this.selectTab}
          />

          <Button
            children="Pay"
            isSelected={this.state.activeTab === "Pay" ? true : false}
            click={this.selectTab}
          />

        </div>

        <div>

          {this.renderContent()}

        </div>

      </div>

    )

  }

};

export default App;