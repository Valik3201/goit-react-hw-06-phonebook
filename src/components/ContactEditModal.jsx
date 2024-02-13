import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

/**
 * ContactEditModal component for editing a contact.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.show - Whether the modal should be visible.
 * @param {Object} props.contact - The contact being edited.
 * @param {Function} props.onClose - The function to handle modal closure.
 * @param {Function} props.onUpdateContact - The function to handle updating the contact.
 */
export const ContactEditModal = ({
  show,
  contact,
  onClose,
  onUpdateContact,
}) => {
  /**
   * State for the contact being edited.
   * @type {Object}
   */
  const [editedContact, setEditedContact] = useState(contact || {});

  useEffect(() => {
    // Update the editedContact state when the contact prop changes
    setEditedContact(contact || {});
  }, [contact]);

  /**
   * Handles saving changes to the edited contact.
   */
  const handleSaveChanges = () => {
    // Update the contact with the edited data
    const updatedContact = { ...contact, ...editedContact };

    // Call the onUpdateContact function to update the contact in the parent component
    onUpdateContact(updatedContact);

    // Close the modal after saving changes
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Name">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={editedContact.name || ''}
                  onChange={e =>
                    setEditedContact({ ...editedContact, name: e.target.value })
                  }
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="floatingInput" label="Number">
                <Form.Control
                  type="text"
                  placeholder="Enter number"
                  value={editedContact.number || ''}
                  onChange={e =>
                    setEditedContact({
                      ...editedContact,
                      number: e.target.value,
                    })
                  }
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// PropTypes for ContactEditModal
ContactEditModal.propTypes = {
  show: PropTypes.bool.isRequired,
  contact: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onUpdateContact: PropTypes.func.isRequired,
};
