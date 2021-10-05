import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ findContact, deleteContact }) => {
  return (
    <ul className={style.contactList}>
      {findContact().map(contact => (
        <li key={contact.id} className={style.contactItem}>
          <p className={style.contactText}>
            {contact.name}: {contact.number}
          </p>
          <button type="button" id={contact.id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  findContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
