import { Component } from 'react';
// import { nanoid } from 'nanoid';
import initialContacts from './contacts.json';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  render() {
    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm />;
      </main>
    );
  }
}
