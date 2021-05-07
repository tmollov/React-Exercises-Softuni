import {input_type, input_name, labels} from '../../commons/input_constants';

import React, {useState} from 'react'
import {useFormik} from "formik";
import InputArea from "../common/InputArea";
import TextArea from "../common/TextArea";
import ValidationService from "../../services/validationService";
import PostService from "../../services/postService";
import {Redirect} from "react-router-dom";
import links from "../../commons/link_constants";

const validate = ValidationService.submit_form_validation;

export default function PostEditForm({post}) {
    const [id, setId] = useState(null);
    const f = useFormik({
        enableReinitialize: true,
        initialValues: post,
        validate,
        onSubmit: values => {
            PostService.update_post(values).then((res) => {
                setId(res.id)
            });
        }
    });

    const tryRedirect = () => {
        if (id !== null) {
            return <Redirect to={links.to_post(id)}/>
        }
    }

    return (
        <div className="submitArea formContainer">
            {tryRedirect()}

            <form id="submitForm" className="submitForm" onSubmit={f.handleSubmit}>

                <InputArea
                    label={labels.link_title}
                    name={input_name.title}
                    type={input_type.text}
                    onChange={f.handleChange}
                    defaultValue={f.values.title}
                    errors={f.errors.title}
                    required={true}
                />

                <InputArea
                    label={labels.link_url}
                    name={input_name.url}
                    type={input_type.url}
                    onChange={f.handleChange}
                    defaultValue={f.values.url}
                    errors={f.errors.url}
                    required={true}
                />

                <InputArea
                    label={labels.link_thumbnail}
                    name={input_name.thumbnail}
                    type={input_type.url}
                    onChange={f.handleChange}
                    defaultValue={f.values.thumbnail}
                    errors={f.errors.thumbnail}
                />

                <TextArea
                    label={labels.link_comment}
                    name={input_name.comment}
                    onChange={f.handleChange}
                    defaultValue={f.values.comment}
                />

                <input type={input_type.submit} value={labels.submit}></input>
            </form>
        </div>
    );
}
