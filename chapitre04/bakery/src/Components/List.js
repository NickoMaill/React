import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class List extends React.Component {

    

    render() {

        return (

            <div>

                <ul>

                    {this.props.listItems.map((curr, index) => {

                        return (

                            <li key={index}>{curr.name} - {curr.price} </li>

                        )

                    })}

                </ul>

            </div>

        )
    }
}

export default List;