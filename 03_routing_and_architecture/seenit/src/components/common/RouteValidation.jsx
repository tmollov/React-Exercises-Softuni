import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthState from '../../adapters/authState';

import links from '../../commons/link_constants'

const routes = {
    tryRedirect: () => {
        if (AuthState.auth.jwt === null) {
            return <Redirect to={links.home} />
        }
    }
}

export { routes }
