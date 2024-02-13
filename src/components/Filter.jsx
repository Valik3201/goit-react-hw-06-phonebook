import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

/**
 * Filter component for filtering contacts by name.
 * @param {Object} props - The component props.
 * @param {string} props.value - The current filter value.
 * @param {Function} props.onChange - The function to handle filter changes.
 */
export const Filter = ({ value, onChange }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name to filter"
      />
    </Form.Group>
  );
};

// PropTypes for Filter
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
