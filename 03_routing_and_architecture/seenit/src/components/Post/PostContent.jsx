import React from "react";
import AuthState from "../../adapters/authState";
import links from "../../commons/link_constants";

export default function PostContent({id, title, author, date}) {
    const getAuthor = (author) => {
        let parts = author.split("@");
        return parts[0];
    }

    const getDate = (date) => {
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }

        const old = new Date(date);
        const current = new Date();
        const diffTime = Math.abs(current - old);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return `${diffDays} day${pluralize(diffDays)}`;
    }

    const showControls = () => {
        return (
            <ul>
                <li className="action">
                    <a className="commentsLink" href={links.to_post(id)}>
                        comments
                    </a>
                </li>
                {AuthState.auth.username === author ? (<li className="action">
                    <a className="editLink" href={links.to_post(id)}>
                        edit
                    </a>
                </li>) : null}

                {AuthState.auth.username === author ? (<li className="action">
                    <a className="deleteLink" href={links.to_post(id)}>
                        delete
                    </a>
                </li>) : null}

            </ul>
        )
    }

    return (
        <div className="post-content">
            <div className="title">
                <a href="https://softuni.bg/">{title}</a>
            </div>
            <div className="details">
                <div className="info">submitted {getDate(date)} ago by {getAuthor(author)}</div>
                <div className="controls">
                    {showControls()}
                </div>
            </div>
        </div>
    );
}

