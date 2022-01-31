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
      submitted: "d-none"

    };

    this.onMailChange = this.onMailChange.bind(this)
    this.onPassChange = this.onPassChange.bind(this)

  };

  onMailChange(e) {
    this.setState({ inputMail: e.target.value })
    // console.log("mail", this.state.inputMail);

    let mail = this.state.inputMail;
    // const mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    // if (e.match(mailFormat)) {
    //   this.setState({checkMail: "is-valid"})

    // } 
    // console.log(mail.length);
    
    if (mail.length < 12) {
      this.setState({checkMail: "is-invalid"})
    }
  };

  onPassChange(e) {
    this.setState({ inputPass: e.target.value })
    console.log("pass", this.state.inputPass);

    let password = this.state.inputPass

    if (password.length >= 12) {
      this.setState({checkPass: "is-valid"})

    } 
    console.log(password.length);
    
    if (password.length < 12) {
      this.setState({checkPass: "is-invalid"})
    }
  };

  onDisplayChange = () => {

    let checkPass = this.state.checkPass
    let checkMail = this.state.checkMail

    if (checkMail === "is-valid" && checkPass === "is-valid") {
      this.setState({submitted: "d-flex"})
      this.setState({formHide: "d-none"})
      
    } else if (checkMail !== "is-valid" || checkPass !== "is-valid") {
      this.setState({checkPass: "is-invalid"})
      this.setState({checkMail: "is-invalid"})

    }
  } 

  render() {

    return (

      <Form
        onInputMail={this.onMailChange}
        onInputPass={this.onPassChange}
        mailValid = {this.state.checkMail}
        passValid = {this.state.checkPass}
        display = {this.state.submitted}
        display2 = {this.state.formHide}
        button = {() => this.onDisplayChange()}
      />

    )

  };

};

export default App;