import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/form"


class App extends React.Component {

  constructor() {

    super()

    this.state = {

      inputMail: null,
      inputPass: null,
      checkMail: null,
      checkPass: null

    };

    this.onMailChange = this.onMailChange.bind(this)

    this.onPassChange = this.onPassChange.bind(this)

  };

  onMailChange(e) {
    this.setState({ inputMail: e.target.value })
    console.log(this.state.inputMail);
  };

  onPassChange(e) {
    this.setState({ inputPass: e.target.value })
    console.log(this.state.inputPass);
  };

  render() {

    return (

      <Form
        onInputMail={this.onMailChange}
        onInputPass={this.onMailChange}
      />

    )

  };

};

export default App;