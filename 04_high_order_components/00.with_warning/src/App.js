import React, { Component } from 'react';

import Form from "./components/Form";
import Article from './components/Article';
import Navigation from './components/Navigation'

import WithAlert from "./hocs/withAlert";

const RedArticle = WithAlert(Article);
const RedForm = WithAlert(Form);
const RedNavigation = WithAlert(Navigation);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { alert: false };
  }

  switch = () => {
    this.setState({ alert: !this.state.alert });
  }

  render() {
    return (
      <div>
        <div className="App">
          {this.state.alert ? <RedArticle /> : <Article />}
          {this.state.alert ? <RedForm /> : <Form />}
          {this.state.alert ? <RedNavigation /> : <Navigation />}
        </div>
        <button onClick={this.switch}>Switch</button>
      </div>
    )
  }
}
