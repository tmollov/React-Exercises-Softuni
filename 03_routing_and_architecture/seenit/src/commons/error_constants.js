const error = {
    required:"Required",
    invalid_email:"Invalid email address",
    invalid_password:"Only characters and numbers are allowed",
    invalid_length: (name,len) => {
        return `${name} must be ${len} character long!`
    },
    passwords_not_match: "Passwords does not match!"
}

export {error}