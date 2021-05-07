import React, {Component} from "react";
import PostArticle from "./PostArticle";
import PostService from "../../../services/postService";
import NoPosts from "../NoPosts";

export default class PostsList extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount = () => {
        PostService.get_posts().then((res) => {
            this.setState({posts: res});
        })
    }

    showArticles = () => {
        if (this.state.posts.length === 0) {
            return <NoPosts/>
        }

        let arr = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            arr.push(<PostArticle key={i} post={this.state.posts[i]}/>)
        }
        return arr;
    }

    render = () => {
        return (
            <div className="posts">
                {this.showArticles()}
            </div>
        );
    }

}
