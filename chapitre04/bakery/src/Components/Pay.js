import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Pay extends React.Component{

    render() {

        return (

            <div>
                <p>Total : {`${this.props.total}`} €</p>
            </div>

        )

    }

}

export default Pay;