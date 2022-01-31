import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Form extends React.Component {

    render() {
        return (

            <div>

            <div className="d-flex flex-column align-items-center">

                <div className="p-5">

                    <h1>Login</h1>

                </div>

                <form className="w-25">


                    <div class="mb-3">

                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                    </div>

                    <div class="mb-3">

                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password..."/>

                    </div>

                    <div class="mb-3 form-check">

                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>

                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>

                </form>

                <div className="d-none">

                    <h1>Form Submitted</h1>

                </div>

            </div>
            </div>

        )
    }

}

export default Form;