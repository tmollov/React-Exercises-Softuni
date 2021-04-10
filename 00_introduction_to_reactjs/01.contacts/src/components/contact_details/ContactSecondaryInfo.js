import React, { Component } from 'react'

export default class ContactSecondaryInfo extends Component {
    render() {
        let i = this.props;
        return (
            <div className="info">
                <div className="info-line">&#9742; {i.phone}</div>
                <div className="info-line">&#9993; {i.email}</div>
            </div>
        )
    }
}
