import AuthState from '../adapters/authState';
import {fetcher, endpoints} from '../adapters/fetcher';
import NotificationService from "./notificationService";
import {types, messages} from "../commons/notification_constants";


const authService = {
    log_in(email, password) {
        let data = {email, password};
        NotificationService.showMessage(types.loading, messages.loading)
        return fetcher.post(endpoints.login, data, (res) => {
            this.validate(res, email);
        })
    },
    register(email, password) {
        let data = {email, password};
        return fetcher.post(endpoints.register, data, (res) => {
            this.validate(res, email)
        })
    },
    log_out() {
        localStorage.clear();
        AuthState.reset();
        NotificationService.showMessage(types.info, messages.logout);
    },

    validate(res, email) {
        if (res.hasOwnProperty('accessToken')) {
            AuthState.set_auth(res.accessToken, email);
            NotificationService.showMessage(types.info, messages.signed);
        } else {
            NotificationService.showMessage(types.error, res);
        }
    },

    isUserCreator: (author) => {
        return AuthState.auth.username === author;
    }
}

export default authService