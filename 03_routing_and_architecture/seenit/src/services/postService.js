import ValidationService from "./validationService";
import notificationService from "./notificationService";
import {messages, types} from "../commons/notification_constants";
import AuthState from "../adapters/authState";
import {endpoints, fetcher} from "../adapters/fetcher";

const PostService = {
    add_post(post) {
        console.log(post)
        if (!ValidationService.validate_post(post)) {
            notificationService.showMessage(types.error,messages.invalid_post);
        }
        notificationService.showMessage(types.loading,messages.uploading_post)

        post.title = post.title.trim();
        post.url = post.url.trim();
        post.thumbnail = post.thumbnail.trim();
        post.comment = post.comment.trim();

        post.author = AuthState.auth.username;
        post.date = new Date();

        return fetcher.post(endpoints.posts, post, (res) => {
            notificationService.showMessage(types.info, messages.post_uploaded)
            return res.id;
        })
    },
    get_posts() {
        return fetcher.get(endpoints.posts, (res) => {
            //notificationService.showMessage(types.info, messages.post_uploaded)
            return res;
        })
    },
    get_post(id) {
        return fetcher.get(endpoints.post(id), (res) => {
            //notificationService.showMessage(types.info, messages.post_uploaded)
            return res;
        })
    }
}

export default PostService;