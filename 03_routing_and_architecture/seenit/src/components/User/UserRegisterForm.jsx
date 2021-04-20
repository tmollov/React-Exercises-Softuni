import React from 'react'
import Inputs from '../../commons/Inputs';
import { labels, name, type } from '../../commons/input_constants';

export default function UserRegisterForm({change,submit,isSame}) {
    return (
        <form id="registerForm">
            <h2>Sign Up</h2>
            {Inputs.getInput(labels.email, name.email, type.text, change)}
            {Inputs.getInput(labels.password, name.password, type.password, change)}
            {Inputs.getInput(labels.repeat_password, name.repeat_password, type.password, isSame)}
            {Inputs.getSubmitInput("btnRegister", labels.sign_up, submit)}
        </form>
    );
}