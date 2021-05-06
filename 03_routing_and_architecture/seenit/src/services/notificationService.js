import NotifState from "../adapters/notificationState";

const notify = {
    duration: 3000,
    type: null,
    showMessage(type, content) {
        NotifState.add({type: type, content: content});
        this.hideNotif();
    },
    isAnyNotifications() {
        return NotifState.msg !== null;
    },
    hideNotif() {
        setTimeout(() => {
            NotifState.reset();
        }, this.duration)
    }
}

export default notify;
