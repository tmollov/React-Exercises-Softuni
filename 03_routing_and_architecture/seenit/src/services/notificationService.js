import NotifState from "../adapters/notificationState";

const notify = {
    duration:3000,
    type:null,
    showMessage(msg) {
        NotifState.add(msg);
        this.hideNotif();
    },
    isAnyNotifications(){
        if (NotifState.msg === null){
            return false;
        }
        return true;
    },
    hideNotif(){
        setTimeout(() => {
            NotifState.reset();
        },this.duration)
    }
}

export  default notify;
