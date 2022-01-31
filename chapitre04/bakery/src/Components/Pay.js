import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Pay extends React.Component{
    render() {
        return (
            <div className={this.props.isSelected? "d-flex" : "d-none"}>Pay</div>

        )
    }
}

export default Pay;