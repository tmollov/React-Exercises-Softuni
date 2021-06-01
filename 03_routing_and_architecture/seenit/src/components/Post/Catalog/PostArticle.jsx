import React from "react";

import PostThumbnail from "./PostThumbnail";
import PostContent from "./PostContent";

export default function PostArticle(props) {
    const post = props.post;

    return (
        <article className="post">
            <div className="col rank">
                <span>{post.id}</span>
            </div>
            <PostThumbnail id={post.id} url={post.url} image={post.thumbnail}/>
            <PostContent post={post} delete={props.delete}/>
        </article>
    );
};