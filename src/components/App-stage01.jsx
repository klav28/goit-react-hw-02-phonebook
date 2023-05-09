import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();
    //     console.log(ev.target);

    const newContact = {
      id: nanoid(4),
      name: ev.target.elements.name.value,
    };

    this.setState({ contacts: [...this.state.contacts, newContact] });

    ev.target.reset();
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
            {'Name: '}
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" style={{ width: '100px' }}>
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
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
