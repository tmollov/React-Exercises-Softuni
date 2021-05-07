import React from "react";
import {other} from "../../../commons/global_constants";

export default function PostThumbnail({id, url, image}) {
    if (image === "") {
        image = other.no_image;
    }

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
