import React from "react";
import styles from "./counter.modules.css"

class CounterSlave extends React.Component {

    render() {
        
        return (

            <div className="counter">

                <h2>{this.props.count}</h2>

                <div className="button-div">

                <button onClick={`${this.props.increment} ${this.props.incrementSlave}`}> + </button>
                <button onClick={this.props.substract}> - </button>

                </div>


            </div>
        )
    }
}

export default CounterSlave