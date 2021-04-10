import React, { Component } from 'react';
import Contact from './Contact';
export default class ContactList extends Component {
    render() {
        return (
            <div id="list">
                <h1>Contacts</h1>
                <div className="content">
                    {this.props.contacts.map((value, index) => {
                        return <Contact key={index} firstName={value.firstName} lastName={value.lastName} />
                    })}
                </div>
            </div>
        )
    }
}
