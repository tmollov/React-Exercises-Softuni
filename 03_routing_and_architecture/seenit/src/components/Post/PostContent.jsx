import React, { Component } from "react";

export default class PostContent extends Component {
  render() {
    return (
      <div className="post-content">
        <div className="title">
          <a href="https://softuni.bg/">SoftUni</a>
        </div>
        <div className="details">
          <div className="info">submitted 1 day ago by Kiril</div>
          <div className="controls">
            <ul>
              <li className="action">
                <a className="commentsLink" href="/">
                  comments
                </a>
              </li>
              <li className="action">
                <a className="editLink" href="/">
                  edit
                </a>
              </li>
              <li className="action">
                <a className="deleteLink" href="/">
                  delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
