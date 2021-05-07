import React, {Component} from 'react';
import PostService from "../../services/postService";
import {get_controls} from "../../commons/post_helper";
import PostDetailContent from "./PostDetailContent";
import PostThumbnail from "./Catalog/PostThumbnail";
import authService from "../../services/authService";

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        PostService.get_post(id).then((res) => {
            this.setState(res);
        })
    }

    showDetails = () => {
        return (
            <PostDetailContent data={this.state}
                               controls={get_controls(this.state.id, this.state.author, authService.isUserCreator)}/>
        )
    }

    render() {
        return (
            <section id="viewComments">
                <div className="post">
                    <PostThumbnail id={this.state.id} url={this.state.url} image={this.state.thumbnail}/>
                    {this.showDetails()}
                    <div className="clear"></div>
                </div>
                <div className="post post-content">
                    <form id="commentForm">
                        <label>Comment</label>
                        <textarea name="content" type="text"></textarea>
                        <input type="submit" value="Add Comment" id="btnPostComment"/>
                    </form>
                </div>
                <article className="post post-content">
                    <p>Thanks, just what I needed.</p>
                    <div className="info">
                        submitted 5 days ago by Gosho | <a href={"/"} className="deleteLink">delete</a>
                    </div>
                </article>
                <article className="post post-content">
                    <p>Tutorial is kinda outdated, but it works.</p>
                    <div className="info">
                        submitted 4 days ago by Kiril | <a href={"/"} className="deleteLink">delete</a>
                    </div>
                </article>
                <article className="post post-content">
                    <p>Beats React any day! So must easier and less boilerplate.</p>
                    <div className="info">
                        submitted 3 days ago by Nakov | <a href={"/"} className="deleteLink">delete</a>
                    </div>
                </article>
            </section>
        );
    }
}

export default PostDetails;