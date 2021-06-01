import React, {Component} from 'react'
import PostsList from "./Catalog/PostsList";

export default class MyPosts extends Component {

    render() {
        return (
            <section id="viewMyPosts">

                <div className="post post-content">
                    <h1>Your Posts</h1>
                </div>
                <PostsList myposts={true}/>
            </section>
        )
    }
}
