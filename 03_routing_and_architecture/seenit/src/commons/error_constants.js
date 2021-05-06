import {capitalized} from "./global_constants";

const error = {
    required:"Required",
    invalid_email:"Invalid email address",
    invalid_password:"Only characters and numbers are allowed",
    invalid_length: (name,len) => {
        return `${name} must be ${len} character long!`
    },
    passwords_not_match: "Passwords does not match!",
    invalid_title:"Title cannot start with space/s",
    invalid_url:`Url must start with ${capitalized.https}`

}

export {error}