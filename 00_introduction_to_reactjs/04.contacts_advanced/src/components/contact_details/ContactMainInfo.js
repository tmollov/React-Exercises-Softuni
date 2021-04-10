import React, { Component } from 'react'

export default class ContactMainInfo extends Component {
    render() {
        let i = this.props; 
        return (
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">{i.firstName}</span>
                    <span className="name">{i.lastName}</span>
                </div>
            </div>
        )
    }
}
