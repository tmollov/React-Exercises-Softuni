import React from 'react';
import {Redirect} from "react-router-dom";
import AuthState from "../adapters/authState";

function WithAuth(WrappedComponent) {
    return class extends React.Component {
        showContent = () => {
            if (AuthState.auth.jwt !== null) {
                return <WrappedComponent {...this.props} />;
            } else {
                return <Redirect to={"/"}/>
            }
        }

        render() {
            return this.showContent();
        }
    };
}

export default WithAuth;