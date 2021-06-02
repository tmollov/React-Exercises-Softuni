import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    triggerErr = () => {
        this.setState(prev => ({ err: !prev.err }))
    }

    render() {

        if (this.state.err) {
            throw new Error('Ups, crashed!');
        }
        return (
            <main>
                <h1>Hello</h1>
                <button onClick={this.triggerErr}>Click</button>
            </main>
        )
    }
}
