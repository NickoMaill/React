import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            productName: "",
            price: 1
        }

        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    }

    updateProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    updatePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    click = () => {
        this.props.addItem(this.state.productName, this.state.price)
    }

    render() {
        return (
            
            <div>

                <form className="row g-3">

                    <div className="col-auto py-3">
                        <label htmlFor="inputPassword2" className="visually-hidden"></label>
                        <input onChange={this.updateProductName} type="search" className="form-control" id="inputPassword2" placeholder="Item" />
                    </div>

                    <div className="col-auto py-3">
                        <button type="button" onClick={this.click} className="btn btn-primary">add</button>
                    </div>

                    <div className="row">
                        <input type="range" value={this.state.price} onChange={this.updatePrice} min="1" max="40"></input>
                        <span>{this.state.price}</span>
                    </div>

                </form>

            </div>

        )
    }
}

export default Add;