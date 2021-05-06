import React from "react";

import PostContent from "../Post/PostContent";
import PostThumbnail from "../Post/PostThumbnail";

export default function PostArticle({post}) {
    return (
        <article className="post">
            <div className="col rank">
                <span>{post.id}</span>
            </div>
            <PostThumbnail id={post.id} url={post.url} image={post.thumbnail} />
            <PostContent id={post.id} title={post.title} author={post.author} date={post.date}/>
        </article>
    );
};