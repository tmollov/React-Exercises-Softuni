import React from "react";

export default function PostThumbnail({id,url,image}) {
  return (
    <div className="col thumbnail">
      <a href={url}>
        <img
          src={image}
          alt={id}
        />
      </a>
    </div>
  );
}
