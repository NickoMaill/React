import React from "react";

class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 1
        }

    }
    render() {
        return (
            <div>

                <h2>{this.state.count}</h2>

                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}> + </button>

                <button onClick={() => {
                    this.setState({ count: this.state.count - 1 })
                }}> - </button>

            </div>
        )
    }
}

export default Counter