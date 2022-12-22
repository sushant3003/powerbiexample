import React, { Component } from "react";
import { connect } from "react-redux";
import "./SignIn.css";
import { validateLogin } from "../../utils/validate";
import { history } from "../../utils/history";
import { doSignin } from "../../Redux/Actions/SignInActions";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    onSubmit = (e) => {

        e.preventDefault();

        const { email, password } = this.state;

        if (validateLogin(email, password)) {       

            this.props.doSignins({ email, password }, (result) => {});

            history.push("/main");

            history.go(0);

        } else {

            alert("Invalid email or password");

        }

    }

    render() {
        return (
            <div className="signInMainDiv">
                <label className="title mb-5">Copilot</label>
                <div className="formDiv">
                    <div className="m-0 row col-12 mt-2">
                        <div className="col-3">
                            <label className="labelText pl-3">Email:</label>
                        </div>
                        <div className="col-8">
                            <input type="text" name="email" id="email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="m-0 row col-12 mt-2 ">
                        <div className="col-3">
                            <label className="labelText">Password:</label>
                        </div>
                        <div className="col-8">
                            <input type="password" name="password" id="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                        </div>
                    </div>
                    <button className="mt-3" onClick={this.onSubmit}>Sign In</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    signInState: state.SignInReducer,
  });
  
  const mapDispatchToProps = (dispatch) => {
  
    return {

      doSignins: (userDetails, callBack) =>
        dispatch(doSignin(userDetails, callBack)),     

    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignIn);