import React, { Component } from 'react'
import Inputs from '../../commons/Inputs';

import { type, name, labels } from '../../commons/input_constants';

export default class PostCreateForm extends Component {
    render() {
        return (
            <div className="submitArea formContainer">
                <form id="submitForm" className="submitForm">

                    {Inputs.getInput(labels.link_url, name.url, type.url, this.props.change)}
                    {Inputs.getInput(labels.link_title, name.title, type.text, this.props.change)}
                    {Inputs.getInput(labels.link_thumnail, name.image, type.url, this.props.change)}

                    {Inputs.getTextArea(labels.link_comment, name.comment, this.props.change)}

                    {Inputs.getSubmitInput("btnSubmitPost", labels.submit, this.props.submit)}

                </form>
            </div>
        )
    }
}
