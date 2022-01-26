import React from 'react';
import './App.css';
import Counter from "./Component/counter.js";
import CounterSlave from './Component/counterSlave';
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0,
      countSlave: 0
    }

  }

  increment = () => {
    let add = this.state.count;
    this.setState({ count: add + 1 })
  }

  incrementSlave = () => {
    let addSlave = this.state.countSlave;
    if (addSlave === this.state.count) {
      this.setState({countSlave: this.state.count})
    }
  }

  substract = () => {
    let sub = this.state.count;
    this.setState({ count: sub - 1 })

    if (sub === 0) {
      this.setState({count: 0})
    }
  }

  substractSlave = () => {
    let subSlave = this.slave.countSlave;
    if (subSlave >= this.state.count) {
      this.setState({countSlave: subSlave - 1})
    }
  }

  render() {

    return (

      <div className='container'>

      <div className='counter-div'>

        <h1>Counter</h1>

        <Counter
          count = {this.state.count}
          increment = {() => this.increment()}
          substract = {() => this.substract()}
        />

      </div>

      <div className='counter-div'>

        <h1>Counter</h1>

        <CounterSlave
          count = {this.state.countSlave}
          increment = {() => this.increment}
          incrementSlave = {() => this.incrementSlave()}
          substract = {() => this.substractSlave()}
        />

      </div>

      </div>


    )

  }

}


export default App;
