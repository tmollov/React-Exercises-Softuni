const constants = {
    loading: "Loading...",
    logout: "Logged out!"
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