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


                        <div class="mb-3">

                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" className={`form-control ${this.props.mailValid}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                        </div>

                        <div class="mb-3">

                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" className={`form-control ${this.props.passValid}`} id="exampleInputPassword1" placeholder="Enter password..." />

                        </div>

                        <div class="mb-3 form-check">

                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>

                        </div>

                        <button type="submit" className="btn btn-primary" onChange={this.props.input}>Submit</button>

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