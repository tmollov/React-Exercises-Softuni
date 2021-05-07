import React from 'react';
import {format_author, format_date} from "../../commons/post_helper";

function PostDetailContent({data, controls}) {
    return (
        <div className="post-content">
            <div className="title">
                <a href={data.url}>
                    {data.title}
                </a>
            </div>
            <div className="details">
                <p>{data.comment}</p>
                <div className="info">
                    submitted {format_date(data.date)} ago by {format_author(data.author)}
                </div>
                <div className="controls">
                    {controls}
                </div>
            </div>
        </div>
    );
}

export default PostDetailContent;