import React, {Component} from 'react';
import NotificationService from "../../services/notificationService";
import {message, types, messages} from "../../commons/notification_constants";
import {Redirect} from "react-router-dom";
import links from "../../commons/link_constants";

export default class UserLogOut extends Component {
    logout = () => {
        NotificationService.showMessage(message(types.info, messages.logout));
        localStorage.clear();
    };

    render = () => {
        this.logout();
        return <Redirect to={links.home}/>
    }
}