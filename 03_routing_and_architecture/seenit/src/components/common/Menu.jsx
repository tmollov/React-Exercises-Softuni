import React from 'react';
import {Link} from "react-router-dom";
import links from "../../commons/link_constants";
import AuthState from "../../adapters/authState";

function Menu() {
    let showMenu = () => {
        return AuthState.auth.jwt !== null ? (
                <div id="menu">
                    <div className="title">Navigation</div>
                    <Link className="nav" to={links.home}>Catalog</Link>
                    <Link className="nav" to={links.submit}>Submit Link</Link>
                    <Link className="nav" to={links.my_posts}>My Posts</Link>
                </div>)
            : "";
    }

    return showMenu();
}

export default Menu;