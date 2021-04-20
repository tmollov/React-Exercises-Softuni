import React, { Component } from 'react'
import authService from '../services/authService';

class WithFormManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Target = this.props.target;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.isLogin) {
      authService.sign_in(this.state.email, this.state.password);
    } else {
      authService.sign_up(this.state.email, this.state.password)
    }
  }

  isSameWith = (e, target) => {
  }


  render = () => {
    return (
      <div>
        <this.Target change={this.handleChange} submit={this.handleSubmit} isSame={this.isSameWith} />
      </div>
    )
  }
}

export default WithFormManager;
