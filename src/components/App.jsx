import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

/**
 * Main App component representing the Phonebook application.
 * @component
 */
const App = () => {
  // Retrieve stored contacts from localStorage or initialize as an empty array.
  const storedContacts = localStorage.getItem('myPhonebook');
  const initialContacts = storedContacts ? JSON.parse(storedContacts) : [];

  // State variables for managing contacts and the filter.
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // Update localStorage when contacts change.
  useEffect(() => {
    localStorage.setItem('myPhonebook', JSON.stringify(contacts));
  }, [contacts]);

  /**
   * Add a new contact to the list.
   * @param {object} newContact - The new contact to be added.
   */
  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  /**
   * Handle filter input change.
   * @param {object} e - The event object containing the new filter value.
   */
  const handleFilterChange = e => {
    setFilter(e.target.value.toLowerCase());
  };

  /**
   * Delete a contact with the given ID.
   * @param {string} contactId - The ID of the contact to be deleted.
   */
  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  /**
   * Update the contacts list with the provided array of contacts.
   * @param {array} updatedContacts - The updated array of contacts.
   */
  const handleUpdateContacts = updatedContacts => {
    setContacts(updatedContacts);
  };

  // Filter contacts based on the current filter value.
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  // Render the Phonebook application UI.
  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col>
          <h1>Phonebook</h1>

          {/* ContactForm component for adding new contacts */}
          <ContactForm addContact={addContact} contacts={contacts} />

          <h2 className="mt-3">Contacts</h2>

          {/* Filter component for filtering contacts */}
          <Filter value={filter} onChange={handleFilterChange} />

          {/* ContactList component for displaying the list of contacts */}
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
            onUpdateContacts={handleUpdateContacts}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
