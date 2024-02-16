import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

function ModalAlert({ isOpen, onClose, existingName, existingPhone }) {
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
}

export default ModalAlert;
