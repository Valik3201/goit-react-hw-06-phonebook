import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/filterSlice';
import { selectFilter } from '../redux/selectors/contactsSelectors';
import { Input } from '@nextui-org/react';
import { Search } from 'lucide-react';

/**
 * Component for filtering contacts.
 * @returns {JSX.Element} The JSX element representing the filter input.
 */
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  /**
   * Handles changes in the filter input.
   * @param {object} event - The input change event.
   * @returns {void}
   */
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={handleChange}
      labelPlacement="outside"
      startContent={
        <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export default Filter;
