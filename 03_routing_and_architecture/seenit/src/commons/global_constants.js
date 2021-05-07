const capitalized = {
    password: "Password",
    https: "HTTPS://",
    http: "HTTP://"
}

const protocols = {
    https: "https://",
    http: "http://"
}

const regexes = {
    password: /^[a-z0-9]{6,}$/i,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    // eslint-disable-next-line
    url: /[https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
}

const other = {
    no_image: "https://gaprastore.com/wp-content/uploads/2020/12/no_image.jpg"
}

export {capitalized, regexes, protocols, other}