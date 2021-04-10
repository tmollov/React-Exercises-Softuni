import React, { Component } from 'react';

export default class Contact extends Component {
    returnContactInfo = (event) => {
        let id = Number(event.target.getAttribute("data-id"));
        this.props.showDetails(id);
    }

    render() {
        let c = this.props;
        return (
            <div className={this.props.isSelected === c.id  ? "contact-active" : "contact"} data-id={c.id} onClick={this.returnContactInfo}>
                <span className="avatar small">&#9787;</span>
                <span className="title">{c.firstName} {c.lastName}</span>
            </div>
        )
    }
}