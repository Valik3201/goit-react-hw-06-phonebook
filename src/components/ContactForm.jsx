import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/reducers/contactsSlice';
import { nanoid } from 'nanoid';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ id: nanoid(), name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-wrap md:flex-nowrap gap-4"
    >
      <Input
        type="text"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        isRequired
        size="sm"
      />
      <Input
        type="text"
        label="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        isRequired
        size="sm"
      />

      <Button type="submit" color="primary" size="lg" className="px-12">
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;
