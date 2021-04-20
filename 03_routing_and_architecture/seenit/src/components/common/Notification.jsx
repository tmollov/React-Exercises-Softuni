import React, {Component} from 'react';
import NotificationService from '../../services/notificationService'
import NotifState from "../../adapters/notificationState";

export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = null
        NotificationService.duration = 3000;
    }

    componentDidMount = () => {
        NotifState.listen(() => {
            this.setState({...NotifState.msg})
        });
    }

    showNotifications = () => {
        if (NotificationService.isAnyNotifications()) {
            return (<div id={NotifState.msg.type} className="notification">
                <span>{NotifState.msg.content}</span>
            </div>);
        }
    }

    render = () => {
        return (
            <div id="notifications">
                {this.showNotifications()}
            </div>
        )
    }

}