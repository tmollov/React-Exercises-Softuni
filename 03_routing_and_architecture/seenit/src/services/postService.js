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
    get_my_posts() {
        return fetcher.get(endpoints.my_posts(AuthState.auth.username), (res) => {
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
    },
    remove_posts(id) {
        return fetcher.delete(endpoints.post(id), (res) => {
            notificationService.showMessage(types.info, messages.post_removed)
            return res;
        })
    },
    get_comments_for_post(post_id) {
        return fetcher.get(endpoints.comments_for_post(post_id), (res) => {
            return res;
        })
    },
    add_comment_to_post(post_id, content) {
        let comment = {
            post_id: post_id,
            author: AuthState.auth.username,
            date: Date.now(),
            content: validators.escapeHtml(content.trim())
        }

        return fetcher.post(endpoints.comments, comment, (res) => {
            notificationService.showMessage(types.info, messages.comment_posted)
            return res
        })
    },
    remove_comment(id) {
        return fetcher.delete(endpoints.comment(id), (res) => {
            notificationService.showMessage(types.info, messages.comment_deleted);
            return res;
        })
    }
}

export default PostService;