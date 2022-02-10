import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Card extends React.Component {

    constructor() {

        super()

        this.state = {
            image: "/images/item.png"

        };

    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`)
            .then((res) => res.blob())
            .then((imgURL) => {
                const pathReturn = URL.createObjectURL(imgURL)
                this.setState({ image: pathReturn });
            });

    };

    render() {
        console.log(this.state.image);
        return (
            <div>

                <button onClick={() =>
                    this.props.onClick(this.props.productName, this.props.price)}
                >

                <img
                    src={this.state.image}
                    alt={this.state.productName}
                />
                </button>
                
            </div>
        );
    }
}

export default Card;
