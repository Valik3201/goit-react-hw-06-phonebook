import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state for the contacts slice.
 * @constant {Array}
 */
const initialState = [
  { id: 'id-1', name: 'Steve Jobs', phone: '459-12-56' },
  { id: 'id-2', name: 'Bill Gates', phone: '443-89-12' },
  { id: 'id-3', name: 'Elon Musk', phone: '645-17-79' },
  { id: 'id-4', name: 'Mark Zuckerberg', phone: '227-91-26' },
];

/**
 * Redux slice for managing contacts.
 * @constant {object}
 */
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    /**
     * Reducer function for adding a new contact.
     * @function
     * @param {Array} state - Current state of contacts.
     * @param {object} action - The action containing the new contact to add.
     */
    addContact: (state, action) => {
      state.push(action.payload);
    },
    /**
     * Reducer function for deleting a contact.
     * @function
     * @param {Array} state - Current state of contacts.
     * @param {object} action - The action containing the id of the contact to delete.
     */
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);

      state.splice(index, 1);
    },
  },
});

/**
 * Action creators for the contacts slice.
 */
export const { addContact, deleteContact } = contactsSlice.actions;

/**
 * Reducer for the contacts slice.
 * @constant {function}
 */
export default contactsSlice.reducer;
