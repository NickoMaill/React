import React from 'react';
import './App.css';
import Counter from "./Component/Counter.js";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    }

  }

  increment = () => {
    let add = this.state.count;
    this.setState({ count: add + 1 })
  }

  substract = () => {
    let sub = this.state.count;
    this.setState({ count: sub - 1 })
  }

  render() {

    return (

      <div>

        <h1>Counter</h1>

        <Counter
          count = {this.state.count}
          increment = {() => this.increment()}
          substract = {() => this.substract()}
        />

      </div>

    )

  }

}


export default App;
