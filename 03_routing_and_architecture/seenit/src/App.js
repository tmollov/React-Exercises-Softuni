import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import links from './commons/link_constants';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Notification from "./components/common/Notification";

import WelcomeContainer from './components/Welcome/WelcomeContainer';
import CatalogContainer from './components/Catalog/CatalogContainer';

import MyPosts from './components/Post/MyPosts';

import AuthState from './adapters/authState'
import PostCreateForm from "./components/Post/PostCreateForm";
import PostForm from "./components/Post/PostForm";
import WithAuth from "./hocs/withAuth";
import authService from "./services/authService";

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
        return authService.isUserLogged() ?
            <Route exact path={links.home} component={WelcomeContainer}/>
            :
            <Route exact path={links.home} component={CatalogContainer}/>;
    }

    showMenu = () => {
        return authService.isUserLogged() ? (
                <div id="menu">
                    <div className="title">Navigation</div>
                    <Link className="nav" to={links.home}>Catalog</Link>
                    <Link className="nav" to={links.submit}>Submit Link</Link>
                    <Link className="nav" to={links.my_posts}>My Posts</Link>
                </div>)
            : "";
    }

    render() {
        return (
            <div>
                {this.showHeader()}
                <Notification/>

                <div id="content">
                    {this.showMenu()}

                    <Switch>
                        {this.showHome()}
                        <Route path={links.my_posts} component={WithAuth(MyPosts)}/>
                        <Route path={links.submit} component={WithAuth(PostCreateForm)}/>

                        <Route path={links.post} component={WithAuth(PostForm)}/>
                    </Switch>

                    <Footer/>
                </div>
            </div>

        );
    }
}

export default App;
