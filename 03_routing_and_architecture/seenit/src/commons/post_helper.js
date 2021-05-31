import AuthState from "../adapters/authState";
import links from "./link_constants";
import React from "react";

function format_author(author) {
    if (author) {
        let parts = author.split("@");
        return parts[0];
    }
}

function format_date(date) {
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

function detail_controls(id) {

    let onDelete = (e) => {
        console.log(e)
    }

    return (
        <ul>
            <li className="action">
                <a className="editLink" href={links.to_edit_post(id)}>
                    edit
                </a>
            </li>
            <li className="action">
                <button className="deleteLink" onClick={onDelete} data-id={id}>
                    delete
                </button>
            </li>
        </ul>
    );
}

function comment_control(id) {
    return (<ul>
        <li className="action">
            <a className="commentsLink" href={links.to_post(id)}>
                comments
            </a>
        </li>
    </ul>);
}

function get_controls(id, author, show_comments) {
    if (!show_comments) {
        return null;
    }

    if (AuthState.auth.username !== author) {
        return comment_control(id);
    }
    return detail_controls(id);
}

function normalizeComment(safe) {
    if (safe) {
        return safe
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, `"`)
            .replace(/&#039;/g, "'");
    }
}

export {format_date, format_author, get_controls, normalizeComment}