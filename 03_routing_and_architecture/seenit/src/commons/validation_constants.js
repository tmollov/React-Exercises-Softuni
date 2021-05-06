import {regexes} from "./global_constants";

const validators = {
    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    },

    url_validator(link) {
        return regexes.url.test(link)
    },
    isEmpty(str) {
        if (str.length === 0) {
            return true;
        }
        if (str.split(' ').every(e => e === '')) {
            return true;
        }
        return false;
    }
}


export default validators;