import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../contactForm/ContactForm ";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./App.module.css";

const App = () => {
  const [contactList, setContactsList] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [find, setFind] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const addContact = (contact) =>
    setContactsList((prev) => [...prev, { id: uuidv4(), ...contact }]);

  const isThereThisContact = (name) =>
    contactList.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  const deleteContact = (e) => {
    const id = e.target.id;
    setContactsList((prev) => prev.filter((contact) => contact.id !== id));
  };

  const addToFilterState = (e) => {
    const filter = e.target.value;
    setFind(filter);
  };

  const findContact = () =>
    contactList.filter((contact) =>
      contact.name.toLowerCase().includes(find.toLowerCase())
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
        <Filter addToFilterState={addToFilterState} filter={find} />
        <ContactList findContact={findContact} deleteContact={deleteContact} />
      </div>
    </>
  );
};

export default App;
