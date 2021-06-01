import React, {Component} from 'react';
import PostService from "../../services/postService";
import {get_controls} from "../../commons/post_helper";
import PostDetailContent from "./PostDetailContent";
import PostThumbnail from "./Catalog/PostThumbnail";
import authService from "../../services/authService";
import PostComment from "./PostComment";
import links from "../../commons/link_constants";

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            my_comment: ""
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        PostService.get_post(id).then((res) => {
            // If there is id save post
            if (res.id) {
                this.setState({post: res});
                PostService.get_comments_for_post(id).then((res) => {
                    this.setState({comments: res})
                })
            } else { // else redirect to home page
                this.props.history.push(links.home);
            }
        })
    }

    showComments = () => {
        let comm = [];

        for (let i = 0; i < this.state.comments.length; i++) {
            let c = this.state.comments[i];
            comm.push(<PostComment key={i}
                                   commentId={c.id}
                                   content={c.content}
                                   author={c.author}
                                   date={c.date}
                                   deleteComment={this.removeComment}
            />)
        }

        return comm;
    }

    removeComment = (event) => {
        event.preventDefault();
        let commentId = Number(event.target.getAttribute("data-comment-id"));
        PostService.remove_comment(commentId).then((res) => {
            let coms = this.state.comments.filter(x => x.id !== commentId);
            this.setState({comments: coms})
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        PostService.add_comment_to_post(this.state.post.id, this.state.my_comment).then((res) => {
            this.setState({my_comment: ""})
            PostService.get_comments_for_post(this.state.post.id).then((res) => {
                this.setState({comments: res})
            })
        })
    }

    onChange = (event) => {
        this.setState({my_comment: event.target.value});
    }

    render() {
        return (
            <section id="viewComments">
                <div className="post">
                    <PostThumbnail id={this.state.post.id} url={this.state.post.url} image={this.state.post.thumbnail}/>
                    <PostDetailContent data={this.state.post}
                                       controls={get_controls(this.state.post.id, this.state.post.author, authService.isUserCreator)}/>
                    <div className="clear"></div>
                </div>
                <div className="post post-content">
                    <form id="commentForm" onSubmit={this.onSubmit}>
                        <label>Comment</label>
                        <textarea onChange={this.onChange}
                                  value={this.state.my_comment}
                                  name="content"
                                  type="text"
                                  required></textarea>
                        <input type="submit" value="Add Comment" id="btnPostComment"/>
                    </form>
                </div>

                {this.showComments()}
            </section>
        );
    }
}

export default PostDetails;