import PropTypes from 'prop-types';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

/**
 * Modal alert component to display messages.
 * @param {object} props - Component props.
 * @param {boolean} props.isOpen - Flag indicating if the modal is open.
 * @param {function} props.onClose - Function to close the modal.
 * @param {string|null} props.existingName - The existing name (if any).
 * @param {string|null} props.existingPhone - The existing phone (if any).
 * @returns {JSX.Element} The JSX element representing the modal alert.
 */
const ModalAlert = ({ isOpen, onClose, existingName, existingPhone }) => {
  let message = '';

  if (existingName && existingPhone) {
    message = (
      <>
        Contact with name <strong>{existingName}</strong> and phone{' '}
        <strong>{existingPhone}</strong> already exists!
      </>
    );
  } else if (existingName) {
    message = (
      <>
        Contact with name <strong>{existingName}</strong> already exists!
      </>
    );
  } else if (existingPhone) {
    message = (
      <>
        Contact with phone <strong>{existingPhone}</strong> already exists!
      </>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Oppps...</ModalHeader>
        <ModalBody>
          <p>{message}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAlert;

ModalAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  existingName: PropTypes.string,
  existingPhone: PropTypes.string,
};
