import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 0, name: 'Katy Perry', phone: '+1 (682) 560-1864' },
    { id: 1, name: 'Lady Gaga', phone: '+1 (845) 927-7865' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
