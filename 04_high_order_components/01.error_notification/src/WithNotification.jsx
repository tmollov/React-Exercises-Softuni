import React, { Component } from 'react'

export default class WithNotification extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info.componentStack);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Runtime error occurred.</h1>;
        }
        return this.props.children;
    }
}
