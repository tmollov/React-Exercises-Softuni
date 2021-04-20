import React, { Component } from "react";
import PostArtichle from "./PostArtichle";

export default class PostsList extends Component {

    // TODO: Get posts from server
    getPosts = () => {
        return ;
    }

    render() {
        return (
            <div className="posts">
                <PostArtichle />
                <PostArtichle />
            </div>
        );
    }
}
