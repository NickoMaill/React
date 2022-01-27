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
    let numSLave = this.state.countSlave;
    this.setState({ count: add + 1 })

    if (numSLave === add) {
      this.setState({ countSlave: numSLave + 1 })
    }
  }

  increment2 = () => {
    let add2 = this.state.countSlave;
    let add = this.state.count;
    this.setState({countSlave: add2 + 1})
  } if (add2 === ) {
    
  }

  substract2 = () => {
    let sub2 = this.state.countSlave;
    this.setState({ countSlave: sub2 - 1 })
  }

  substract = () => {
    let sub = this.state.count;
    let numSlave = this.state.count;

    this.setState({ count: sub - 1 })

    if (sub === 0) {
      this.setState({ count: 0 })
    }

    if (sub === numSlave) {
      this.setState({countSlave: numSlave - 1 })
    }
  }

  render() {

    return (

      <div className='container'>

        <div className='counter-div'>

          <h1>Counter 1</h1>

          <Counter
            count={this.state.count}
            increment={() => this.increment()}
            substract={() => this.substract()}
          />

        </div>

        <div className='counter-div'>

          <h1>Counter 2</h1>

          <CounterSlave
            count={this.state.countSlave}
            increment={() => this.increment2()}
            substract={() => this.substract2()}
          />

        </div>

      </div>


    )

  }

}


export default App;
