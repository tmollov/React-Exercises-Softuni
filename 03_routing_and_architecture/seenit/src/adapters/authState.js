let listeners = [];

const AuthState = {
    auth: {
        jwt: localStorage.getItem("jwt"),
        username: localStorage.getItem("username"),
    },

    set_auth(jwt, username) {
        localStorage.setItem("jwt", jwt);
        localStorage.setItem("username", username);
        this.reset();
    },
    reset() {
        this.auth = {
            jwt: localStorage.getItem("jwt"),
            username: localStorage.getItem("username"),
        }
        this.update();
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

export default AuthState;