import React, {Component} from "react";

import NotifState from "../../adapters/notificationState";
import authService from "../../services/authService";

export default class Header extends Component {
    componentDidMount() {
        NotifState.listen(() => {
            this.forceUpdate();
        })
    }

    showProfile = () => {
        let p = this.props;

        return p.username ? (
            <div id="profile">
                <span>{p.username}</span>|<a href="#/logout" onClick={this.logout}>logout</a>
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
