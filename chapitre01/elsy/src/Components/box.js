import React from "react";
import Styles from "./steps.modules.css";

class Box extends React.Component {

  render() {

    return (

      <div className="box col-sm-3 col-6">

        <span
          className="material-icons"
          style={{ color: this.props.color, fontSize: 100 }}
        >
          {this.props.icon}
        </span>

        <p>
          {this.props.value} {this.props.unit}
        </p>

        <form className={this.props.display}>

        <label for="customRange1" class="form-label"></label>
        <input type="range" class="form-range" id="customRange1"></input>

        </form>

      </div>

    );

  }

}

export default Box;

// "material-icons icons"