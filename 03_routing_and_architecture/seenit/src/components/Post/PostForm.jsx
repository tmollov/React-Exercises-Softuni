import React, {Component} from 'react';
import PostService from "../../services/postService";
import PostEditForm from "./PostEditForm";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            image: "",
            comment: ""
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        PostService.get_post_for_edit(id).then((res) => {
            this.setState(res);
        })
    }

    showEdit = () => {
        if (Object.values(this.state).length > 4) {
            return <PostEditForm post={this.state} {...this.props}/>
        }
    }

    render() {
        return (
            <section id="viewSubmit">

                <div className="submitArea">
                    <h1>Edit Link</h1>
                    <p>Please, fill out the form. A thumbnail image & comment is not required.</p>
                </div>

                {this.showEdit()}
            </section>
        );
    }
}

export default PostForm;