import React, { Component } from "react";
import About from './About';
import SignUp from "./SignUp";

export default class WelcomeBase extends Component {
  render() {
    return (
      <section id="viewWelcome">
        <div className="welcome">
          <SignUp />

          <About/>
        </div>
      </section>
    );
  }
}
