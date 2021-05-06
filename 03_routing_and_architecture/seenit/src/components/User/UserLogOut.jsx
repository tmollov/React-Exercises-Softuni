import React, {Component} from 'react';
import NotificationService from "../../services/notificationService";
import {message, types, messages} from "../../commons/notification_constants";
import {Redirect} from "react-router-dom";
import links from "../../commons/link_constants";
import authService from "../../services/authService";

export default class UserLogOut extends Component {
    logout = () => {
        authService.log_out()
        NotificationService.showMessage(message(types.info, messages.logout));
    };

    render = () => {
        this.logout();
        return <Redirect to={links.home}/>
    }
}