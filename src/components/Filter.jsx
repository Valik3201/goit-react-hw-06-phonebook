import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={filter}
      onChange={handleChange}
    />
  );
};

export default Filter;
