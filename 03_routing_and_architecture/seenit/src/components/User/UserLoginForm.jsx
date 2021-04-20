import React from 'react'
import Inputs from '../../commons/Inputs';
import { labels, name, type } from '../../commons/input_constants';

export default function UserLoginForm({change,submit}) {
    return (
        <form id="loginForm">
            <h2>Sign In</h2>
            {Inputs.getInput(labels.email, name.email, type.email, change)}
            {Inputs.getInput(labels.password, name.password, type.password, change)}
            {Inputs.getSubmitInput("btnLogin", labels.sign_in, submit)}
        </form>
    )
}
