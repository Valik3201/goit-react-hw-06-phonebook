import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

/**
 * Functional component for rendering an alert modal.
 * @param {Object} props - Component properties.
 * @param {string} props.name - The name of the contact displayed in the modal.
 * @param {Function} props.onHide - Callback function to handle modal hiding.
 * @param {boolean} props.show - A flag indicating whether the modal should be visible or hidden.
 * @returns {JSX.Element} - The rendered ModalAlert component.
 */
export const ModalAlert = ({ name, onHide, show }) => {
  return (
    <Modal show={show} centered onHide={onHide}>
      <Modal.Header closeButton />
      <Modal.Body>
        Contact with name <span className="fw-bold">{name} </span> already
        exists!
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

// PropTypes
ModalAlert.propTypes = {
  name: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
