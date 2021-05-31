import React from 'react'
import {labels, input_name, input_type} from '../../commons/input_constants';
import {useFormik} from "formik";
import InputArea from "../common/InputArea";
import ValidationService from "../../services/validationService";
import authService from "../../services/authService";

const validate = ValidationService.register_form_validator;

export default function UserRegisterForm() {
    const f = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeat_password: ''
        },
        validate,
        onSubmit: values => {
            authService.register(values.email, values.password);
        }
    });

    return (
        <form id="registerForm" onSubmit={f.handleSubmit}>
            <h2>Sign Up</h2>

            <InputArea
                label={labels.email}
                name={input_name.email}
                type={input_type.email}
                onChange={f.handleChange}
                defaultValue={f.values.email}
                errors={f.errors.email}
                required={true}
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

            <InputArea
                label={labels.repeat_password}
                name={input_name.repeat_password}
                type={input_type.password}
                onChange={f.handleChange}
                defaultValue={f.values.repeat_password}
                errors={f.errors.repeat_password}
                required={true}
            />

            <button id="btnRegister" type={input_type.submit}>{labels.sign_up}</button>
        </form>
    );
}