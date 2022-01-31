import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Form extends React.Component {

    render() {
        return (

            <div className="">

                <div className="d-flex flex-column align-items-center">

                    <div className="p-5">

                        <h1>Login</h1>

                    </div>

                    <form className={`w-25 ${this.props.display2}`}>


                        <div className="mb-3">

                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className={`form-control ${this.props.mailValid}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." onChange={this.props.onInputMail}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                        </div>

                        <div className="mb-3">

                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className={`form-control ${this.props.passValid}`} id="exampleInputPassword1" placeholder="Enter password..." onChange={this.props.onInputPass}/>

                        </div>

                        <div className="mb-3 form-check">

                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>

                        </div>

                        <button type="button" className="btn btn-primary" onClick={this.props.button}>Submit</button>

                    </form>

                    <div className={`bg-secondary p-5 ${this.props.display}`}>

                        <h1 className="p-5">Form Submitted</h1>

                    </div>

                </div>

            </div>

        )
    }

}

export default Form;