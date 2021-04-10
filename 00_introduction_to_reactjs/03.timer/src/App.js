import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 999)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Current time is
          </p>
          <p>{this.state.date.toLocaleTimeString()}</p>
        </header>
      </div>
    )
  }
}
