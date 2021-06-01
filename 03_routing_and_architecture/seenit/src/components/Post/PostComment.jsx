import React from 'react';
import authService from "../../services/authService";
import {format_author, format_date, normalizeComment} from "../../commons/post_helper";

export default function PostComment({commentId, content, date, author, deleteComment}) {
    function showDeleteButton() {
        date = format_date(date);
        let view;
        if (authService.isUserCreator(author)) {
            view = (<div className="info">
                submitted {date} ago by {format_author(author)} | <button data-comment-id={commentId}
                                                                          onClick={deleteComment}
                                                                          className="deleteLink">delete</button>
            </div>)
        } else {
            view = (<div className="info">
                submitted {date} ago by {format_author(author)}
            </div>)
        }
        return view;
    }


    return (
        <article className="post post-content">
            <p>{normalizeComment(content)}</p>
            {showDeleteButton()}
        </article>
    );
}
