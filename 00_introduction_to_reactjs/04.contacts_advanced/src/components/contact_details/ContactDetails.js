import React, { Component } from 'react'
import ContactMainInfo from './ContactMainInfo';
import ContactSecondaryInfo from './ContactSecondaryInfo';

export default class Details extends Component {
    render() {
        let c = this.props.contact;
        let mainInfo = { firstName: c.firstName, 
                         lastName: c.lastName };
        let secInfo = { phone: c.phone, 
                        email: c.email };
        return (
            <div id="details">
                <h1>Details</h1>
                <div className="content">
                    <ContactMainInfo {...mainInfo}></ContactMainInfo>
                    <ContactSecondaryInfo {...secInfo}></ContactSecondaryInfo>
                </div>
            </div >
        )
    }
}
