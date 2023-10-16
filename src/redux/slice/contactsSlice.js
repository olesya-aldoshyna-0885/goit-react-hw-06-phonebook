import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact: (state, { payload }) => {
      const id = nanoid();
      const { name, number } = payload;
      const includesName = state.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );

      if (includesName) {
        return alert(`${name} is already in contacts`);
      } else {
        let contact = { id, name, number };
        state.push(contact);
      }
    },

    deleteContact(state, { payload }) {
      const index = state.findIndex(contact => contact.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;