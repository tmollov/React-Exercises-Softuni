import React from "react";
import AuthState from "../../../adapters/authState";
import links from "../../../commons/link_constants";
import {format_author, format_date} from "../../../commons/post_helper";
import authService from "../../../services/authService";

export default function PostContent(props) {
    const post = props.post;

    const showControls = () => {
        if (AuthState.auth.username !== post.author) {
            return (<ul>
                <li className="action">
                    <a className="commentsLink" href={links.to_post(post.id)}>
                        comments
                    </a>
                </li>
            </ul>);
        }

        return (<ul>
            <li className="action">
                <a className="commentsLink" href={links.to_post(post.id)}>
                    comments
                </a>
            </li>

            {authService.isUserCreator(post.author) ? (<li className="action">
                <a className="editLink" href={links.to_edit_post(post.id)}>
                    edit
                </a>
            </li>) : null}

            {authService.isUserCreator(post.author) ? (<li className="action">
                <button data-id={post.id} className="editLink" onClick={props.delete}>
                    delete
                </button>
            </li>) : null}

        </ul>);
    }

    return (
        <div className="post-content">
            <div className="title">
                <a href="https://softuni.bg/">{post.title}</a>
            </div>
            <div className="details">
                <div className="info">submitted {format_date(post.date)} ago by {format_author(post.author)}</div>
                <div className="controls">
                    {showControls()}
                </div>
            </div>
        </div>
    );
}

