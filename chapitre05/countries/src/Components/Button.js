import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Button extends React.Component {

    


    render() {

        return(

            <div>

                <button onClick={this.props.onClick}>{this.props.children}</button>

            </div>

        )

    }

}

export default Button;