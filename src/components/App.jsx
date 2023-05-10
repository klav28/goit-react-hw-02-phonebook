import { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './contacts.json';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchForm } from './SearchForm/SearchForm';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleDeleteContact = ev => {
    const { id } = ev.target;
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };

  handleAddContact = values => {
    // Проверка на дубликат
    if (
      this.state.contacts.find(
        el => el.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already exists in contacts`);
      return;
    }

    // Создаем новый контакт
    const newContact = {
      id: nanoid(4),
      name: values.name,
      number: values.number,
    };
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  handleFilterChange = ev => {
    const { value } = ev.currentTarget;
    this.setState({ filter: value });
  };

  render() {
    return (
      <main>
        <h1>Phonebook</h1>
        <ContactForm onContactAdd={this.handleAddContact} />
        <SearchForm onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={this.state.contacts.filter(contact => {
            return contact.name
              .toLowerCase()
              .includes(this.state.filter.toLowerCase());
          })}
          onDeleteContact={this.handleDeleteContact}
        />
      </main>
    );
  }
}
