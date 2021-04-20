import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import links from './commons/link_constants';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Notification from "./components/common/Notification";

import WelcomeContainer from './components/Welcome/WelcomeContainer';
import CatalogContainer from './components/Catalog/CatalogContainer';

import MyPosts from './components/Post/MyPosts';
import PostCreate from './components/Post/PostCreate';

import AuthState from './adapters/authState'

class App extends Component {
    componentDidMount = () => {
        AuthState.listen(() => {
            this.forceUpdate();
        })
    }

    showHeader = () => {
        return AuthState.auth.username !== null ?
            <Header username={AuthState.auth.username} {...this.props}/>
            :
            <Header/>
    }

    showHome = () => {
        return AuthState.auth.jwt === null ?
            <Route exact path={links.home} component={WelcomeContainer}/>
            :
            <Route exact path={links.home} component={CatalogContainer}/>;
    }

    showMenu = () => {
        return AuthState.auth.jwt !== null ? (
                <div id="menu">
                    <div className="title">Navigation</div>
                    <Link className="nav" to={links.home}>Catalog</Link>
                    <Link className="nav" to={links.submit}>Submit Link</Link>
                    <Link className="nav" to={links.myposts}>My Posts</Link>
                </div>)
            : "";
    }

    render() {
        return (
            <div>
                {this.showHeader()}
                <Notification />

                <div id="content">
                    {this.showMenu()}

                    <Switch>
                        {this.showHome()}
                        <Route path={links.myposts} component={MyPosts}/>
                        <Route path={links.submit} component={PostCreate}/>
                    </Switch>

                    <Footer/>
                </div>
            </div>

        );
    }
}

export default App;
