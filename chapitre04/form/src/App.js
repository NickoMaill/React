import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/form"


class App extends React.Component {

  constructor() {

    super()

    this.state = {

      inputMail: '',
      inputPass: '',
      checkMail: null,
      checkPass: null,
      formHide: "d-block",
      submitted: "d-none",

    };

    this.onMailChange = this.onMailChange.bind(this)
    this.onPassChange = this.onPassChange.bind(this)

  };


  onMailChange(e) {
    this.setState({ inputMail: e.target.value })

    let mail = this.state.inputMail;
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

    if (validEmail.test(mail)) {
      this.setState({ checkMail: "is-valid" })
      return true

    }

    if (!validEmail.test(mail)) {
      this.setState({ checkMail: "is-invalid" })
    }
  };

  onPassChange(e) {

    this.setState({ inputPass: e.target.value })

    let password = this.state.inputPass
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    if (validPassword.test(password)) {
      this.setState({ checkPass: "is-valid" })

    }

    if (!validPassword.test(password)) {
      this.setState({ checkPass: "is-invalid" })
    }
  };

  onDisplayChange = () => {

    let checkPass = this.state.checkPass
    let checkMail = this.state.checkMail

    if (checkMail === "is-valid" && checkPass === "is-valid") {
      this.setState({ submitted: "d-flex" })
      this.setState({ formHide: "d-none" })
      this.setState({ disabled: false })

    } else if (checkMail !== "is-valid" || checkPass !== "is-valid") {
      this.setState({ checkPass: "is-invalid" })
      this.setState({ checkMail: "is-invalid" })

    }
  }

  render() {

    return (

      <Form
        onInputMail={this.onMailChange}
        onInputPass={this.onPassChange}
        mailValid={this.state.checkMail}
        passValid={this.state.checkPass}
        button={() => this.onDisplayChange()}
        display={this.state.submitted}
        display2={this.state.formHide}
      />

    )

  };

};

export default App;