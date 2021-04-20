import React, {Component} from 'react';
import NotificationService from "../../services/notificationService";
import {message, types, constants} from "../../commons/notification_helper";
import {Redirect} from "react-router-dom";
import links from "../../commons/link_constants";

export default class UserLogOut extends Component {
    logout = () => {
        NotificationService.showMessage(message(types.info, constants.logout));
        localStorage.clear();
    };

    render = () => {
        this.logout();
        return <Redirect to={links.home}/>
    }
}