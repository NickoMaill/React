import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Add extends React.Component {
    render() {
        return (
            <div className={this.props.isSelected === true ? "d-flex" : "d-none"}>
                <form className="row g-3">
                    <div className="col-auto py-3">
                        <label htmlFor="inputPassword2" className="visually-hidden"></label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Item"/>
                    </div>
                    <div className="col-auto py-3">
                        <button type="submit" className="btn btn-primary">add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;