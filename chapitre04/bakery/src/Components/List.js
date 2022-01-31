import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class List extends React.Component{
    render() {
        return (
            <div className={this.props.isSelected? "d-flex" : "d-none"}>List</div>
        )
    }
}

export default List;