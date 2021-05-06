import React, {Component} from "react";
import UserLoginForm from "../User/UserLoginForm";
import UserRegisterForm from "../User/UserRegisterForm";

export default class SignUp extends Component {
    render() {
        return (
            <div className="signup">
                <UserLoginForm/>
                <UserRegisterForm/>
            </div>
        );
    }
}
