import React from 'react';
import authService from "../services/authService";
import {Redirect} from "react-router-dom";

function WithAuth(WrappedComponent) {
    return class extends React.Component {
        showContent = () => {
            if (authService.isUserLogged()) {
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