import AuthState from '../adapters/authState';
import {fetcher, endpoints} from '../adapters/fetcher';
import NotificationService from "./notificationService";
import {message, types, constants} from "../commons/notification_helper";


const authService = {
    sign_in(email, password) {
        let data = {email, password};
        NotificationService.showMessage(types.loading,constants.loading)
        return fetcher.post(endpoints.login, data, (res) => {
            this.validate(res, email);
        })
    },
    sign_up(email, password) {
        let data = {email, password};
        return fetcher.post(endpoints.register, data, (res) => {
            this.validate(res, email)
        })
    },
    log_out(){
        localStorage.clear();
        AuthState.reset();
        NotificationService.showMessage(message(types.loading,constants.logout));
    },

    validate(res, email) {
        if (res.hasOwnProperty('accessToken')) {
            AuthState.set_auth(res.accessToken, email);
            NotificationService.showMessage(message(types.info,"Signed In!"));
        } else {
            NotificationService.showMessage(message(types.error,res));
        }
    }
}

export default authService