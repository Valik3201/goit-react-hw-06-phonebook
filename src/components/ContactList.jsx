import PropTypes from 'prop-types';
import { useState } from 'react';
import { ListGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import { ContactEditModal } from './ContactEditModal';

/**
 * ContactList component for displaying a list of contacts.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.contacts - The array of contacts to display.
 * @param {Function} props.onDeleteContact - The function to handle contact deletion.
 * @param {Function} props.onUpdateContacts - The function to handle updating contacts.
 */
export const ContactList = ({
  contacts,
  onDeleteContact,
  onUpdateContacts,
}) => {
  /**
   * State for the selected contact being edited.
   * @type {Object|null}
   */
  const [selectedContact, setSelectedContact] = useState(null);

  /**
   * State for controlling the visibility of the edit modal.
   * @type {boolean}
   */
  const [showEditModal, setShowEditModal] = useState(false);

  /**
   * Handles opening the edit modal for a specific contact.
   *
   * @param {Object} contact - The contact to be edited.
   */
  const handleEditContact = contact => {
    setSelectedContact(contact);
    setShowEditModal(true);
  };

  /**
   * Handles closing the edit modal.
   */
  const handleEditModalClose = () => {
    setSelectedContact(null);
    setShowEditModal(false);
  };

  /**
   * Handles updating a contact after editing.
   *
   * @param {Object} updatedContact - The updated contact.
   */
  const handleUpdateContact = updatedContact => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );

    onUpdateContacts(updatedContacts);
  };

  // Sorting contacts by name
  const sortedContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {sortedContacts.length === 0 ? (
        <Alert variant="danger">No contacts found. Please add contacts.</Alert>
      ) : (
        <Alert variant="primary">
          You have {sortedContacts.length} contacts.
        </Alert>
      )}
      <ListGroup as="ul">
        {sortedContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
            onEditContact={handleEditContact}
          />
        ))}
      </ListGroup>

      <ContactEditModal
        show={showEditModal}
        contact={selectedContact}
        onClose={handleEditModalClose}
        onUpdateContact={handleUpdateContact}
      />
    </>
  );
};

/**
 * ContactListItem component for rendering an individual contact in the list.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.contact - The contact to display.
 * @param {Function} props.onDeleteContact - The function to handle contact deletion.
 */
const ContactListItem = ({ contact, onDeleteContact, onEditContact }) => {
  return (
    <ListGroup.Item as="li">
      <Row>
        <Col xs={6} sm={4} className="mb-1 mb-sm-0">
          <div className="fw-bold">{contact.name}</div>
        </Col>
        <Col className="text-start mb-1 mb-sm-0" xs={6} sm={4}>
          <div className="me-auto">{contact.number}</div>
        </Col>
        <Col xs={12} sm={4}>
          <Row>
            <Col className="d-grid p-1">
              <Button
                variant="outline-primary"
                size="sm"
                type="button"
                onClick={() => onEditContact(contact)}
              >
                Edit
              </Button>
            </Col>
            <Col className="d-grid p-1">
              <Button
                variant="outline-danger"
                size="sm"
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

// PropTypes for ContactList
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  onUpdateContacts: PropTypes.func.isRequired,
};

// PropTypes for ContactListItem
ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

// Exporting ContactListItem for potential reuse
ContactList.Item = ContactListItem;
