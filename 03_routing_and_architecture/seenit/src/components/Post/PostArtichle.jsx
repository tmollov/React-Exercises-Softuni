import React, { Component } from "react";

import PostContent from "../Post/PostContent";
import PostThumbnail from "../Post/PostThumbnail";

export default class PostArtichle extends Component {
  render() {
    return (
      <article className="post">
        <div className="col rank">
          <span>1</span>
        </div>
        <PostThumbnail />
        <PostContent />
      </article>
    );
  }
}
