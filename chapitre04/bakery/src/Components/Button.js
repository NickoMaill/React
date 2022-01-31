import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Button extends React.Component {

    render() {
        return (

            <div>

                <button value={this.props.children} onClick={this.props.click} type="button" className={this.props.isSelected? "btn btn-primary" : "btn btn-outline-primary"}>{this.props.children}</button>

            </div>

        )

    }

}

export default Button;