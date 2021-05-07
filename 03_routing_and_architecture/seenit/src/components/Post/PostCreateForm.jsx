import {input_type, input_name, labels} from '../../commons/input_constants';
import links from "../../commons/link_constants";

import React, {useState} from 'react'
import {Redirect} from 'react-router-dom';
import {useFormik} from "formik";
import InputArea from "../common/InputArea";
import TextArea from "../common/TextArea";
import ValidationService from "../../services/validationService";
import PostService from "../../services/postService";

const validate = ValidationService.submit_form_validation;

export default function PostCreateForm() {
    const [id, setId] = useState(null);

    const f = useFormik({
        initialValues: {
            title: '',
            url: '',
            thumbnail: '',
            comment: ''
        },
        validate,
        onSubmit: values => {
            PostService.add_post(values).then((id) => {
                setId(id);
            });
        }
    });

    const startRedirect = () => {
        if (id !== null) {
            return <Redirect to={links.to_post(id)}/>
        }
    }

    return (
        <section id="viewSubmit">

            <div className="submitArea">
                <h1>Submit Link</h1>
                <p>Please, fill out the form. A thumbnail image & comment is not required.</p>
            </div>

            <div className="submitArea formContainer">
                {startRedirect()}

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
                        errors={f.errors.image}
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
        </section>


    );
}
