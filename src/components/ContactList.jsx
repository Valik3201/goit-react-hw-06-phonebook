import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/reducers/contactsSlice';
import {
  selectContacts,
  selectFilter,
} from '../redux/selectors/contactsSelectors';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.phone}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
