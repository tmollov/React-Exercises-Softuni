import Form from './Form';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  handleSubmit = (elements) => {
    this.setState(elements);
  }

  showResult = () => {
    if (this.state) {
      let arr = [];
      Object.keys(this.state).forEach(element => {
        arr.push(<p key={element}>{element} = {this.state[element]}</p>)
      });
      return arr;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Form onSubmit={this.handleSubmit}>
            <div>
              <label>Username:</label>
              <div>
                <input name="username" type="text" />
              </div>
            </div>
            <hr />
            <div>
              <label>Password:</label>
              <div>
                <input name="password" type="password" />
              </div>
            </div>
            <div>
              <label>Email:</label>
              <div>
                <input name="email" type="email" />
              </div>
            </div>

            <input type="submit" value="Submit" />
          </Form>
          <div>{this.showResult()}</div>
        </header>
      </div>
    );
  }
}