import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css"

class Pay extends React.Component {

    constructor() {
        super()

        this.state = {

            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }

        this.handleSelect = this.handleSelect.bind(this)

    }

    handleSelect(name, price) {
        console.log(name, price);
    }

    render() {


        return (

            <div>

                {/* <p>{this.state.basket}</p>
                <p>{this.state.total} €</p>
                <p>{this.state.totalTVA} €</p>
                <p>{this.state.totalEcoTax} €</p>
                <p>{this.state.totalTTC} €</p> */}
                <p>Total : {`${this.props.total}`} €</p>
                {this.props.items.map(item => {
                    <Card
                    productName={item.name}
                    price={item.price}
                    onClick={() => this.handleSelect(item.name, item.price)}
                    />

                })}
            </div>

        )

    }

}

export default Pay;