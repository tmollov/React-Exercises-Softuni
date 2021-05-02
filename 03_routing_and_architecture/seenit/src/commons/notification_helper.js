const constants = {
    loading: "Loading...",
    logout: "Logged out!",
    passwords_not_match: "Passwords doesn't match"
}

const types = {
    error: "error",
    info: "info",
    loading: "loading"
}

function message(type, content) {
    return {type, content}
}

export {message, types, constants}