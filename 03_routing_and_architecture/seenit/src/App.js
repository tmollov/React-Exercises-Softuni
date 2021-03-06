import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import AuthState from './adapters/authState'
import links from './commons/link_constants';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Notification from "./components/common/Notification";

import WelcomeContainer from './components/Welcome/WelcomeContainer';
import CatalogContainer from './components/Catalog/CatalogContainer';

import MyPosts from './components/Post/MyPosts';

import PostCreateForm from "./components/Post/PostCreateForm";
import PostForm from "./components/Post/PostForm";
import WithAuth from "./hocs/withAuth";
import PostDetails from "./components/Post/PostDetails";
import Menu from "./components/common/Menu";

class App extends Component {
    componentDidMount = () => {
        AuthState.listen(() => {
            this.forceUpdate();
        })
    }

    showHome = () => {
        return AuthState.auth.jwt !== null ?
            <Route exact path={links.home} component={CatalogContainer}/> :
            <Route exact path={links.home} component={WelcomeContainer}/>;
    }

    render() {
        return (
            <div>
                <Header/>
                <Notification/>

                <div id="content">
                    <Menu/>

                    <Switch>
                        {this.showHome()}
                        <Route path={links.my_posts} component={WithAuth(MyPosts)}/>
                        <Route path={links.submit} component={WithAuth(PostCreateForm)}/>


                        <Route path={links.edit_post} component={WithAuth(PostForm)}/>
                        <Route path={links.post_detail} component={WithAuth(PostDetails)}/>

                        <Redirect to={links.home}/>
                    </Switch>
                </div>

                <Footer/>
            </div>

        );
    }
}

export default App;
