import React, { Component } from "react";
import PostCreateForm from "./PostCreateForm";
import { routes } from '../common/RouteValidation';

export default class PostCreate extends Component {

  render() {
    return (
      <section id="viewSubmit">
        {routes.tryRedirect()}

        <div className="submitArea">
          <h1>Submit Link</h1>
          <p>Please, fill out the form. A thumbnail image is not required.</p>
        </div>

        <PostCreateForm />
      </section>
    );
  }
}
