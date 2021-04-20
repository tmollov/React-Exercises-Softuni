import React, { Component } from "react";
import WithFormManager from "../../hoc/withFormManager";
import UserLoginForm from "../User/UserLoginForm";
import UserRegisterForm from "../User/UserRegisterForm";

export default class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <WithFormManager target={UserLoginForm} isLogin={true}/>
        <WithFormManager target={UserRegisterForm} isLogin={false}/>
      </div>
    );
  }
}
