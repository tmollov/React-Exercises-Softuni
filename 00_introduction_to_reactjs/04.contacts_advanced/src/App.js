import React, { Component } from 'react'
import Footer from './components/Footer';
import ContactList from './components/ContactList'
import ContactDetails from './components/contact_details/ContactDetails';

import contactsJson from './contacts.json';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.allcontacts = contactsJson;
    this.selectedItem = 0;
  }

  showDetails = (id) => {
    this.setState(this.allcontacts[id])
    this.selectedItem = id;
  }

  componentDidMount = () => {
    this.showDetails(this.selectedItem);
  }

  render() {
    return (
      <div className="container">
        <ContactList contacts={contactsJson} showDetails={this.showDetails} selectedItem={this.selectedItem}> </ContactList>
        <ContactDetails contact={this.state}></ContactDetails>
        <Footer></Footer>
      </div>
    )
  }
};
