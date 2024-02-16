import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/reducers/contactsSlice';
import {
  selectContacts,
  selectFilter,
} from '../redux/selectors/contactsSelectors';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedContacts = filteredContacts
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Table
      aria-label="Contacts"
      selectionMode="single"
      defaultSelectedKeys={['2']}
    >
      <TableHeader>
        <TableColumn className="w-2/5">NAME</TableColumn>
        <TableColumn className="w-2/5">PHONE</TableColumn>
        <TableColumn className="w-1/5 text-center">ACTIONS</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No contacts to display.'}>
        {sortedContacts.map(contact => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell className="text-center">
              <Button
                color="danger"
                variant="light"
                size="sm"
                startContent={<Trash2 className="w-4 h-4" />}
                onClick={() => handleDelete(contact.id)}
                className="hidden md:flex"
              >
                Delete
              </Button>

              <Button
                color="danger"
                variant="light"
                isIconOnly
                onClick={() => handleDelete(contact.id)}
                className="md:hidden"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ContactList;
