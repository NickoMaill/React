import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Add extends React.Component{
    render() {
        return (
            <div className={this.props.isSelected === true ? "d-flex" : "d-none"}>Add</div>
        )
    }
}

export default Add;