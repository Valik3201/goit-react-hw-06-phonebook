import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { ModalAlert } from './ModalAlert';

import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap';

/**
 * ContactForm component for adding new contacts to the Phonebook.
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.contacts - The array of existing contacts.
 * @param {Function} props.addContact - The function to add a new contact.
 */
export const ContactForm = ({ addContact, contacts }) => {
  // State variables for managing input fields and modal visibility.
  const nameRef = useRef(null);
  const numRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);

  /**
   * Handle form submission.
   * @param {Object} e - The form submit event.
   */
  const handleFormSubmit = e => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredNum = numRef.current.value;

    // Check if a contact with the same name already exists.
    if (contacts.some(contact => contact.name === enteredName)) {
      setModalShow(true);
      return;
    }

    // Create a new contact object with a unique ID.
    const newContact = {
      id: nanoid(),
      name: enteredName,
      number: enteredNum,
    };

    // Add the new contact and reset input fields.
    addContact(newContact);
    nameRef.current.value = '';
    numRef.current.value = '';
  };

  // Render the form with input fields for name and number.
  return (
    <>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Row>
          <Col>
            {/* Input field for the contact name */}
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                ref={nameRef}
                autoComplete="off"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Name"
                required
              />
            </FloatingLabel>
          </Col>
          <Col>
            {/* Input field for the contact number */}
            <FloatingLabel
              controlId="floatingInput"
              label="Number"
              className="mb-3"
            >
              <Form.Control
                type="tel"
                name="number"
                ref={numRef}
                autoComplete="off"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="+48 123-456-789"
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        {/* Submit button for adding a new contact */}
        <Row className="justify-content-end">
          <Col xs={12} lg={4}>
            <Button variant="primary" type="submit" className="w-100">
              Add Contact
            </Button>
          </Col>
        </Row>
      </Form>

      {/* ModalAlert component for displaying a modal when a duplicate name is entered */}
      <ModalAlert
        show={modalShow}
        name={nameRef.current?.value}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

// PropTypes for type-checking component properties.
ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
