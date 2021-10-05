import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.props.isThereThisContact(this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }

    this.props.addContact(this.state);

    this.reset();
  };

  reset = () => this.setState({ name: '', number: '' });

  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            placeholder="Jacob Mercer"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.onHandleChange}
            className={styles.contactName}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            placeholder="+38(093)223-77-88"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.onHandleChange}
            className={styles.contactName}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
