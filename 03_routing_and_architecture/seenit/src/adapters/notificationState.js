let listeners = [];

const NotifState = {
    msg:null,

    add(msg) {
        this.msg = msg;
        this.update();
    },

    reset() {
        this.msg = null;
        this.update()
    },
    update() {
        listeners.forEach((c) => c());
    },
    listen(cb) {
        listeners.push(cb);
        return () => {
            listeners = listeners.filter((c) => c !== cb);
        };
    }
};

export default NotifState;