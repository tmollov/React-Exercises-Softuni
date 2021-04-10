import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        let c = this.props;
        return (
            <div className="contact" data-id="id">
                <span className="avatar small">&#9787;</span>
                <span className="title">{c.firstName} {c.lastName}</span>
            </div>
        )
    }
}