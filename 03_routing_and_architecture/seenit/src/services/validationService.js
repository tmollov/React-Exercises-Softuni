import {min} from "../commons/input_constants";
import {error} from "../commons/error_constants";
import {capitalized, protocols, regexes} from "../commons/global_constants";

const ValidationService = {
    validate_post(post) {
        return post.title !== undefined && post.url !== undefined;
    },


    // TODO: Fix if inside validators
    login_form_validator(values) {
        const errors = {};
        errors.email = ValidationService.check_email(values.email);
        errors.password = ValidationService.check_password(values.password);
        if (errors.email === undefined &&
            errors.password === undefined) {
            return {};
        }
        return errors;
    },
    register_form_validator(values) {
        const errors = {};
        errors.email = ValidationService.check_email(values.email);
        errors.password = ValidationService.check_password(values.password);
        errors.repeat_password = ValidationService.check_repeat_password(values.password, values.repeat_password);
        if (errors.email === undefined &&
            errors.password === undefined &&
            errors.repeat_password === undefined) {
            return {};
        }
        return errors;
    },
    submit_form_validation(values) {
        const errors = {};
        errors.title = ValidationService.check_title(values.title);
        errors.url = ValidationService.check_url(values.url);
        errors.thumbnail = ValidationService.check_url(values.thumbnail);
        if (errors.title === undefined &&
            errors.url === undefined) {
            return {};
        }
        return errors;
    },

    check_title(title) {
        if (!title) {
            return error.required;
        } else if (title.trimStart().length !== title.length) {
            return error.invalid_title;
        }
        return undefined;
    },
    check_url(url) {
        if (!url) {
            return error.required;
        } else if (!url.startsWith(protocols.https)) {
            return error.invalid_url;
        }
        return undefined;
    },
    check_email(email) {
        if (!email) {
            return error.required;
        } else if (!regexes.email.test(email)) {
            return error.invalid_email;
        }
        return undefined;
    },
    check_password(password) {
        if (!password) {
            return error.required;
        } else if (password.length < min.password) {
            return error.invalid_length(capitalized.password, min.password);
        } else if (!regexes.password.test(password)) {
            return error.invalid_password
        }
        return undefined;
    },
    check_repeat_password(password, repeat_password) {
        this.check_password(repeat_password);
        if (password !== repeat_password) {
            return error.passwords_not_match
        }
        return undefined;
    }
}

export default ValidationService;