import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Steve Jobs', phone: '459-12-56' },
  { id: 'id-2', name: 'Bill Gates', phone: '443-89-12' },
  { id: 'id-3', name: 'Elon Musk', phone: '645-17-79' },
  { id: 'id-4', name: 'Mark Zuckerberg', phone: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);

      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
