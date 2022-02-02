import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css"

class Pay extends React.Component{

    render() {

        return (

            <div>
                <p>Total : {`${this.props.total}`} €</p>
                <Card/>
            </div>

        )

    }

}

export default Pay;