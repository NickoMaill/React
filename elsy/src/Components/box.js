import React from "react";
import Styles from "./steps.modules.css";

class Box extends React.Component {

  render() {

    return (

      <div className={`box col-sm-3 col-6 d-flex flex-column align-items-center  ${this.props.bgColor}`}>

        <span className= {`material-icons icons ${this.props.color}`}>{this.props.icon}</span>
        <p>{`${this.props.value} ${this.props.unit}`}</p>

      </div>

    );

  }

}

export default Box;

// "material-icons icons"