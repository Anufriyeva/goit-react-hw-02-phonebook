import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {AppContainer} from './App.styles';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilterChange = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  createContact = (newContactData) => {
    const newId = nanoid();
  
    const newContact = { ...newContactData, id: newId };
  
    const isExist = this.state.contacts.some((contact) => contact.id === newId);
  
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
  
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <AppContainer>
        <h1>Phonebook</h1>
        <ContactForm
          createContact={this.createContact}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}

export default App;

