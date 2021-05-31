import React, {Component} from 'react';
import {Link} from "react-router-dom";
import links from "../../commons/link_constants";
import authService from "../../services/authService";

function Menu() {
    let showMenu = () => {
        return authService.isUserLogged ? (
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