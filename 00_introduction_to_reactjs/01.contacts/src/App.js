import React, { Component } from 'react'
import Footer from './components/Footer';
import ContactList from './components/ContactList'
import ContactDetails from './components/contact_details/ContactDetails';

import contactsJson from './contacts.json';


export default class App extends Component {
  render() {
    let contactIndex = Math.floor(Math.random() * 9);
    return (
      <div className="container">
        <ContactList contacts={contactsJson}> </ContactList>
        <ContactDetails contact={contactsJson[contactIndex]}></ContactDetails>
        <Footer></Footer>
      </div>
    )
  }
};
