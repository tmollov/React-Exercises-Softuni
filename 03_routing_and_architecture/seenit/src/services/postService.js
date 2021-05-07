import ValidationService from "./validationService";
import notificationService from "./notificationService";
import {messages, types} from "../commons/notification_constants";
import AuthState from "../adapters/authState";
import {endpoints, fetcher} from "../adapters/fetcher";
import validators from "../commons/validation_constants";

const f = {
    trim_post: function (post) {
        post.title = validators.escapeHtml(post.title.trim());
        post.url = validators.escapeHtml(post.url.trim());
        post.thumbnail = validators.escapeHtml(post.thumbnail.trim());
        post.comment = validators.escapeHtml(post.comment.trim());

        return post;
    }
}

const PostService = {

    get_posts() {
        return fetcher.get(endpoints.posts, (res) => {
            //notificationService.showMessage(types.info, messages.post_uploaded)
            return res;
        })
    },
    get_post(id) {
        return fetcher.get(endpoints.post(id), (res) => {
            return res;
        })
    },
    get_post_for_edit(id) {
        return fetcher.get(endpoints.edit_post(id), (res) => {
            return res;
        })
    },

    add_post(post) {
        if (!ValidationService.validate_post(post)) {
            notificationService.showMessage(types.error, messages.invalid_post);
        }
        notificationService.showMessage(types.loading, messages.uploading_post)

        post = f.trim_post(post);

        post.author = AuthState.auth.username;
        post.date = new Date();

        return fetcher.post(endpoints.posts, post, (res) => {
            notificationService.showMessage(types.info, messages.post_uploaded)
            return res.id;
        })
    },
    update_post(post) {
        if (!ValidationService.validate_post(post)) {
            notificationService.showMessage(types.error, messages.invalid_post);
        }
        notificationService.showMessage(types.loading, messages.post_updated)

        post = f.trim_post(post);

        return fetcher.put(endpoints.post(post.id), post, (res) => {
            return res;
        })
    }
}

export default PostService;