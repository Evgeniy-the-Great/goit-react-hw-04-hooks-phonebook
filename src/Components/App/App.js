import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../contactForm/ContactForm ";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./App.module.css";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  filter: "",
};

const App = () => {
  const [state, setState] = useState({ ...initialState });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  const addContact = (contact) =>
    setState((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts, { id: uuidv4(), ...contact }],
    }));

  const isThereThisContact = (name) =>
    state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  const deleteContact = (e) => {
    const id = e.target.id;
    setState((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  const addToFilterState = (e) => {
    const filter = e.target.value;
    setState((prev) => ({ ...prev, filter: filter }));
  };

  const findContact = () =>
    state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );

  return (
    <>
      <div className={styles.box}>
        <h1>Phonebook</h1>
        <ContactForm
          isThereThisContact={isThereThisContact}
          addContact={addContact}
        />

        <h2>Contacts</h2>
        <Filter addToFilterState={addToFilterState} filter={state.filter} />
        <ContactList findContact={findContact} deleteContact={deleteContact} />
      </div>
    </>
  );
};

export default App;
