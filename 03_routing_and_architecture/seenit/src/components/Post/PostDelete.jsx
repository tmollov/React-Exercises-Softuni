import React from 'react';

function PostDelete({post_id}) {

    const deletePost = (e) => {
        console.log(e.target)
    }

    return (
        <div>
            <h3>Are you sure to delele that post?</h3>
            <button onClick={deletePost}>Yes, delete it!</button>
            <button onClick={+''}>No, let it stay.</button>
        </div>
    )
}

export default PostDelete;