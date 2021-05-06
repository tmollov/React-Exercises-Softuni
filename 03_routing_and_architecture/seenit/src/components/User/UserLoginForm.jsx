import React from 'react'
import {labels, input_name, input_type} from '../../commons/input_constants';
import InputArea from "../common/InputArea";
import {useFormik} from 'formik'
import ValidationService from "../../services/validationService";
import authService from "../../services/authService";

const validate = ValidationService.login_form_validator;

export default function UserLoginForm() {
    const f = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            authService.sign_in(values.email, values.password)
        }
    });

    return (
        <form id="loginForm" onSubmit={f.handleSubmit}>
            <h2>Sign Up</h2>

            <InputArea
                label={labels.email}
                name={input_name.email}
                type={input_type.email}
                onChange={f.handleChange}
                defaultValue={f.values.email}
                required={true}
                errors={f.errors.email}
            />

            <InputArea
                label={labels.password}
                name={input_name.password}
                type={input_type.password}
                onChange={f.handleChange}
                defaultValue={f.values.password}
                errors={f.errors.password}
                required={true}
            />

            <button id="btnLogin" type={input_type.submit}>{labels.sign_in}</button>
        </form>
    );
}