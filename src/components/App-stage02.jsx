import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    const newContact = {
      id: nanoid(4),
      name: this.state.name,
      number: this.state.number,
    };

    console.dir(newContact);

    this.setState({ contacts: [...this.state.contacts, newContact] });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#307090',
          marginLeft: '20px',
        }}
      >
        <h2>Phonebook</h2>
        <form
          name="phonebook"
          style={{
            outline: 'solid 1px gray',
            padding: '10px',
            display: 'flex',
            fontSize: 20,
            flexDirection: 'column',
            width: '600px',
          }}
          onSubmit={this.handleSubmit}
        >
          <label style={{ padding: '10px' }}>
            Name:
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label style={{ padding: '10px' }}>
            Number:
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <button type="submit" style={{ width: '100px', margin: '10px' }}>
            Add contact
          </button>
        </form>
        <div>
          <ul
            style={{
              color: '#000',
              fontSize: 20,
            }}
          >
            {this.state.contacts.map(el => (
              <li key={el.id}>
                {el.name} ~ {el.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
