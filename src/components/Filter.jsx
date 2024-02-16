import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/filterSlice';
import { selectFilter } from '../redux/selectors/contactsSelectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
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
