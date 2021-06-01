import React, {Component} from "react";

import authService from "../../services/authService";
import AuthState from "../../adapters/authState";

export default class Header extends Component {
    showProfile = () => {
        return AuthState.auth.jwt !== null ? (
            <div id="profile">
                <span>{AuthState.auth.username}</span>|<a href="#logout" onClick={this.logout}>logout</a>
            </div>
        ) : (
            ""
        );
    };

    logout = (e) => {
        e.preventDefault();
        authService.log_out();
    };

    render() {
        return (
            <header>

                <span className="logo">☃</span>
                <span className="header">SeenIt</span>

                {this.showProfile()}
            </header>
        );
    }
}
